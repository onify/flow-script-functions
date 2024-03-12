# Onify Flow Functions

This library provides various functions for Node.js applications.

## Release new version and publish to npm

1. Update `version` in `package.json`
2. Update `CHANGELOG.md`
3. Commit and push the changes
4. Run `git tag vX.X.X`
5. Run `git push --tags`
6. Publish to npm by running `npm publish --access public`

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

## Functions

### Generate UUID

Creates a GUID string using `crypto`

#### Syntax

```
generateUuid(): string
```

#### Return value

GUID string with the format `${string}-${string}-${string}-${string}-${string}`

#### Example

```ts
import { generateUuid } from '@onify/flow-functions';

// ...
const id = generateUuid(); // generates random GUID
console.log(id); // sample output: "55d03475-45fe-4415-81d7-8cd052081fe1"
```

### Slugify

Transforms string to kebab case

#### Syntax

```
slugify(text: string): string
```

#### Parameters

| Name | Type     | Description                   |
| :--- | :------- | ----------------------------- |
| text | `string` | the string value to transform |

#### Return value

`kebab-case` of the input

#### Example

```ts
import { slugify } from '@onify/flow-functions';

// ...
const transformedText = slugify('Hello World!');
console.log(transformedText); // output: "hello-world"
```

### Validate Email

Checks if string is a valid email format

#### Syntax

```
validateEmail(email: string): boolean
```

#### Parameters

| Name  | Type     | Description        |
| :---- | :------- | ------------------ |
| email | `string` | string to validate |

#### Return value

`true` if input is a valid email format, otherwise `false`

#### Example

```ts
import { validateEmail } from '@onify/flow-functions';

// ...
const isValid = slugify('sample@onify.co');
console.log(isValid); // output: true
```
