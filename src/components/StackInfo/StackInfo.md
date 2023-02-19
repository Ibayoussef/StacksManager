`import { StackInfo } from './StackInfo';

# StackInfo Component

Displays information about a stack.

## Usage

```jsx
<StackInfo
  id="12345"
  user="JohnDoe"
  created="2022-02-18T14:35:30.000Z"
  project="My Awesome Project"
/>`
```

## Props

| Name    | Type           | Required | Description                                        |
| ------- | -------------- | -------- | -------------------------------------------------- |
| id      | string         | yes      | The unique ID of the stack.                        |
| user    | string         | yes      | The name of the user who created the stack.        |
| created | string or Date | yes      | The date the stack was created.                    |
| project | string         | yes      | The name of the project associated with the stack. |
