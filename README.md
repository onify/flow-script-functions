# Onify Flow Functions

This library provides various functions for Node.js applications.\
The functions available are as follows:

- [generate UUID](./docs/generate-uuid.md)
- [slugify](./docs/slugify.md)
- [validate email](./docs/validate-email.md)

## Installation

```
npm install @onify/flow-functions
```

## Usage

### Import the library:

##### Javascript

```js
const functions = require('@onify/flow-functions');
```

##### Typescript

```ts
// import all functions
import * as functions from '@onify/flow-functions';
// or
// import specific functions
import { slugify } from '@onify/flow-functions';
```

### Use the functions:

```ts
// example usage of `slugify` function
let output = functions.slugify('Hello World!');
// or
// when using specific imports in TypeScript
output = slugify('Hello World!');
```

## Release new version and publish to npm

1. Update `version` in `package.json`
2. Update `CHANGELOG.md`
3. Commit and push the changes
4. Run `git tag vX.X.X`
5. Run `git push --tags`
6. Publish to npm by running `npm publish --access public`
