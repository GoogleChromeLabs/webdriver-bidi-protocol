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

    const resultType = getResultWithFallbacks(
      apiIndexFile,
      methodString,
      paramsTypeString,
      spec.modulePrefix,
    );

    let finalParamsString = paramsTypeString;
    if (paramsType.getAliasSymbol()) {
      finalParamsString = `${spec.modulePrefix}.${paramsTypeString}`;
    } else {
      if (spec.modulePrefix === 'BidiUaClientHints') {
        // Hack for UA-CH extension spec, because it extends the `emulation`
        // WebDriver BiDi domain and exposes `Emulation` namespace which is
        // already exported by main spec.
        finalParamsString = paramsTypeString.replace(
          /\bEmulation\./g,
          'BidiUaClientHints.Emulation.',
        );
      }
    }

    commandMappingEntries.push({
      method: methodString,
      params: finalParamsString,
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
