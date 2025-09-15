/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {Project, Type, TypeFormatFlags} from 'ts-morph';
import * as path from 'path';
import {
  getTypeInNamespaceOrThrow,
  type MappingInterface,
  type SpecType,
} from './utils.ts';

const rootDir = path.resolve(import.meta.dirname, '..');

const specs: SpecType[] = [
  {
    inputFile: './main.ts',
    commandType: 'CommandData',
    modulePrefix: 'Bidi',
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
      // If not method is found continue.
      // For some reason the Bluetooth spec has Record<string,never>
      // TODO: fix it upstream
      continue;
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

    let expectedResultTypeName = paramsTypeString.replace('Params', 'Result');

    try {
      // Usually we get something like `BrowsingContext.GetTreeResult`
      getTypeInNamespaceOrThrow(apiIndexFile, expectedResultTypeName);
    } catch {
      try {
        // Maybe it was not inside an Namespace try on the module scope
        apiIndexFile.getTypeAliasOrThrow(expectedResultTypeName);
      } catch {
        // Default to EmptyResult
        expectedResultTypeName = `EmptyResult`;
      }
    }

    commandMappingEntries.push({
      method: methodString,
      params: `${spec.modulePrefix}.${paramsTypeString}`,
      resultType: `${spec.modulePrefix}.${expectedResultTypeName}`,
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
    moduleSpecifier: spec.inputFile,
    isTypeOnly: true,
    namespaceImport: spec.modulePrefix,
  });
}

const mapInterface = generatedFile.addInterface({
  name: 'CommandMapping',
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
