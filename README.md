# zeppos-device-types-v1
Fixed API v1.0.0 declarations for @zepp/device-types.

# How to use
To use this library instead of the official one, make the following changes:

1. Uninstall the original library: `npm uninstall device-types`
2. Install this library: `npm install --save-dev zeppos-device-types-v1`
3. Include the declaration files globally (see below)

## Declaration files
Since we are only provided with the `*.d.ts` files, `zeus` won't be able to compile them if we `import` this library. Instead, we need to do one of two things:

* If you have a JavaScript project, add this to `global.d.ts` in the root of the project:

`/// <reference path="node_modules/zeppos-device-types-v1/types/index.d.ts" />`

* If you have a TypeScript project, add this to the `typeRoots` field of `tsconfig.json`:

```json
"typeRoots": [
    "./node_modules/zeppos-device-types-v1"
]
```
