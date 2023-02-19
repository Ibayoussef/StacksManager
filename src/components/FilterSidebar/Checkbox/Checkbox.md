## Checkbox Component

A component that renders a custom checkbox with optional `isShared` prop, and stores the checkbox value in the Redux store.

### Props

| Name       | Type      | Description                                                                     |
| ---------- | --------- | ------------------------------------------------------------------------------- |
| `isShared` | `boolean` | If true, renders a "Shared" checkbox, otherwise renders an "Inactive" checkbox. |

### Usage

```jsx
      <Checkbox isShared />
      <Checkbox />
```
