## [<](../README.md) Validate Email

Checks if string is a valid email format

### Syntax

```
validateEmail(email: string): boolean
```

### Parameters

| Name  | Type     | Description        |
| :---- | :------- | ------------------ |
| email | `string` | string to validate |

### Return value

`true` if input is a valid email format, otherwise `false`

### Example

```ts
import { validateEmail } from '@onify/flow-functions';

// ...
const isValid = slugify('sample@onify.co');
console.log(isValid); // output: true
```
