## [<](../README.md) Generate UUID

Creates a GUID string using `crypto`

### Syntax

```
generateUuid(): string
```

### Return value

GUID string with the format `${string}-${string}-${string}-${string}-${string}`

### Example

```ts
import { generateUuid } from '@onify/flow-functions';

// ...
const id = generateUuid(); // generates random GUID
console.log(id); // sample output: "55d03475-45fe-4415-81d7-8cd052081fe1"
```
