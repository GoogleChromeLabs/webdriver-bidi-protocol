/**
 * @license
 * Copyright 2025 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import type {
  ModuleDeclaration,
  SourceFile,
  TypeAliasDeclaration,
} from 'ts-morph';

export const MAIN_SPEC_PREFIX = 'Bidi';

export function getNamespaces(file: SourceFile, s: String) {
  const result: ModuleDeclaration[] = [];
  for (const n of file.getModules()) {
    if (n.getDeclarationKind() === 'namespace') {
      if (s === n.getName()) {
        result.push(n);
      }
    }
  }
  return result;
}

export interface SpecType {
  inputFile: string;
  commandType: string;
  modulePrefix: string;
}
export interface MappingInterface {
  method: string;
  params: string;
  resultType: string;
}

export function getTypeInNamespace(
  file: SourceFile,
  typeWithNamespace: String,
): TypeAliasDeclaration | undefined {
  const [namespaceName, typeName] = typeWithNamespace.split('.') as [
    string,
    string,
  ];

  for (const namespace of getNamespaces(file, namespaceName)) {
    const type = namespace.getTypeAlias(typeName);

    if (type) {
      return type;
    }
  }
}

export function getResultNameFromMethod(method: string) {
  const type = method
    .split('.')
    .map(s => s.charAt(0).toUpperCase() + s.slice(1))
    .join('.');
  return `${type}Result`;
}

function verifyTypeExist(
  file: SourceFile,
  resultName: string,
  cause?: unknown,
): void {
  // Usually we get something like `BrowsingContext.GetTreeResult`
  let typeExist = getTypeInNamespace(file, resultName);

  if (!typeExist) {
    // Maybe it was not inside an Namespace try on the module scope
    typeExist = file.getTypeAliasOrThrow(resultName);
  }

  if (!typeExist) {
    throw new Error(`Expected type ${resultName} to exist`, {cause: cause});
  }
}

export function getResultWithFallbacks(
  file: SourceFile,
  method: string,
  params: string,
  spec: string,
) {
  let resultName = params.replace('Parameters', 'Result');

  try {
    try {
      // Extensible exist, but does not give the correct type
      // We need to infer from methods
      if (params.includes('Extensible')) {
        resultName = getResultNameFromMethod(method);
      }

      verifyTypeExist(file, resultName);
    } catch (error) {
      resultName = getResultNameFromMethod(method);
      verifyTypeExist(file, resultName, error);
    }
  } catch (error) {
    console.log(`No result type found`, error);

    // The EmptyResult is only available on the main spec
    spec = MAIN_SPEC_PREFIX;
    // Default to EmptyResult
    resultName = `EmptyResult`;
  }

  if (!resultName.endsWith('Result')) {
    throw new Error(`Unexpected params type ${params} of ${method}`);
  }

  return `${spec}.${resultName}`;
}
