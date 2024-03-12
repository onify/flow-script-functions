## [<](../README.md) Slugify

Transforms string to kebab case

### Syntax

```
slugify(text: string): string
```

### Parameters

| Name | Type     | Description                   |
| :--- | :------- | ----------------------------- |
| text | `string` | the string value to transform |

### Return value

`kebab-case` of the input

### Example

```ts
import { slugify } from '@onify/flow-functions';

// ...
const transformedText = slugify('Hello World!');
console.log(transformedText); // output: "hello-world"
```
