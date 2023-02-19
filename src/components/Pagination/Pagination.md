## Pagination

Renders a pagination component with previous and next buttons, and clickable page numbers.

### Usage

```js
import { useState } from "react";
const [currentPage, setCurrentPage] = useState(0);

<Pagination
  page={{ state: currentPage, action: setCurrentPage }}
  pagesNumber={[[{ id: 1 }], [{ id: 2 }], [{ id: 3 }]]}
/>;
```

### Props

| Prop name   | Type            | Required | Description                                                               |
| ----------- | --------------- | -------- | ------------------------------------------------------------------------- |
| page        | object          | Yes      | An object with state and action properties for page state management      |
| pagesNumber | array of arrays | Yes      | An array of arrays of `Stack` objects. Each inner array represents a page |

#### `page` object

| Key    | Type     | Description                                                        |
| ------ | -------- | ------------------------------------------------------------------ |
| state  | number   | The current page number                                            |
| action | function | A state setter function that will be called when a page is clicked |

#### `pagesNumber` array

An array of arrays of `Stack` objects. Each inner array represents a page. The `Stack` object
