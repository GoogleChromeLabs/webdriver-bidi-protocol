/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Project, Type, TypeFormatFlags} from 'ts-morph';
import * as path from 'path';
import {
  getResultWithFallbacks,
  MAIN_SPEC_PREFIX,
  type MappingInterface,
  type SpecType,
} from './utils.ts';

const rootDir = path.resolve(import.meta.dirname, '..');

const specs: SpecType[] = [
  {
    inputFile: './main.ts',
    commandType: 'CommandData',
    modulePrefix: MAIN_SPEC_PREFIX,
  },
  {
    inputFile: './permissions.ts',
    commandType: 'PermissionsCommand',
    modulePrefix: 'BidiPermissions',
  },
  {
    inputFile: './web-bluetooth.ts',
    commandType: 'BluetoothCommand',
    modulePrefix: 'BidiBluetooth',
  },
  {
    inputFile: './ua-client-hints.ts',
    commandType: 'UserAgentClientHintsCommand',
    modulePrefix: 'BidiUaClientHints',
  },
];

const project = new Project({
  tsConfigFilePath: path.resolve(rootDir, 'tsconfig.json'),
});
const commandMappingEntries: MappingInterface[] = [];
for (const spec of specs) {
  const apiIndexFile = project.addSourceFileAtPath(
    path.resolve(rootDir, 'src/gen', spec.inputFile),
  );

  // Allow other name
  const commandType = apiIndexFile.getTypeAliasOrThrow(spec.commandType);
  const unionType = commandType.getType();
  let types: Type[];
  if (unionType.isUnion()) {
    types = unionType.getUnionTypes();
  } else {
    types = [commandType.getTypeNodeOrThrow().getType()];
  }

  for (const unionMember of types) {
    const methodProp = unionMember.getProperty('method');
    if (!methodProp) {
      throw new Error(`No method property found ${unionMember.getText()}`);
    }

    const methodType = methodProp.getTypeAtLocation(commandType);

    if (!methodType.isStringLiteral()) {
      throw new Error(`Non string found ${methodProp.getName()}`);
    }

    const methodString = `${methodType.getLiteralValue()}`;

    const paramsProp = unionMember.getPropertyOrThrow('params');
    const paramsType = paramsProp.getTypeAtLocation(commandType);

    const paramsTypeString = paramsType.getText(
      commandType,
      TypeFormatFlags.None,
    );

    let params = `${spec.modulePrefix}.${paramsTypeString}`;
    if (paramsTypeString.trim().startsWith('{')) {
      params = paramsTypeString;
      const namespaces = apiIndexFile
        .getModules()
        .filter(m => m.isExported() && m.getDeclarationKind() === 'namespace');
      const uniqueNames = new Set(namespaces.map(ns => ns.getName()));
      for (const name of uniqueNames) {
        params = params.split(name + '.').join(`${spec.modulePrefix}.${name}.`);
      }
    }

    const resultType = getResultWithFallbacks(
      apiIndexFile,
      methodString,
      paramsTypeString,
      spec.modulePrefix,
    );

    commandMappingEntries.push({
      method: methodString,
      params: params,
      resultType: resultType,
    });
  }
}

// Start generating the mapping types
const outputPath = path.resolve(rootDir, 'src/gen/mapping.ts');
const generatedFile = project.createSourceFile(outputPath, '', {
  overwrite: true,
});

for (const spec of specs) {
  generatedFile.addImportDeclaration({
    moduleSpecifier: spec.inputFile.replace('.ts', '.js'),
    isTypeOnly: true,
    namespaceImport: spec.modulePrefix,
  });
}

const mapInterface = generatedFile.addInterface({
  name: 'Commands',
  isExported: true,
});

const sortedCommandMappingEntries = commandMappingEntries.sort((a, b) => {
  if (a.method > b.method) {
    return 1;
  } else if (a.method < b.method) {
    return -1;
  }

  return 0;
});

for (const entry of sortedCommandMappingEntries) {
  mapInterface.addProperty({
    // Wrap in quotes as we use <module>.<command-name>
    // syntax
    name: `"${entry.method}"`,
    type: writer => {
      writer.write(`
        {
          params: ${entry.params};
          returnType: ${entry.resultType};
        }  
        `);
    },
  });
}

await generatedFile.save();
