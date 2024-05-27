#!/bin/bash

# @license
# Copyright 2023 Google Inc.
# SPDX-License-Identifier: Apache-2.0

rm -rf src/gen
rm -rf out

git clone https://github.com/w3c/webdriver-bidi.git src/gen/webdriver-bidi
git clone https://github.com/w3c/permissions.git src/gen/permissions

(cd src/gen/webdriver-bidi && scripts/cddl/generate.js)
(cd src/gen/permissions && ../webdriver-bidi/scripts/cddl/generate.js index.html)

cddlconv src/gen/webdriver-bidi/all.cddl > src/gen/main.ts
cddlconv src/gen/permissions/all.cddl > src/gen/permissions.ts

rm -rf src/gen/permissions
rm -rf src/gen/webdriver-bidi

npx prettier -w src/**/*.ts
npx prettier -w test-d/**/*.ts

npx tsc -p tsconfig.json
npx tsd