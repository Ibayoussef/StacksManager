# Dropdown Component

This component is used to display a dropdown that contains a header and content component. The dropdown component is created using React and utilizes the useState hook to manage the collapse state of the dropdown.

## Props

- `stack`: A prop of type `Stack` which is an enum containing information about the stack.

## Usage

```jsx
<Dropdown
  stack={{
    id: "125f317c-1bcf-4497-905d-857b72108af5",
    created: "2022-11-22T12:34:40",
    updated: "2022-11-22T12:34:40",
    user: "ef99200c-807a-4efa-b006-303462d6680c",
    project: "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    is_shared: false,
    name: "my_stack",
    description: "This is my stack",
    components: {
      artifact_store: ["0c32dddd-0779-4f12-ab61-a9e88b70d434"],
      orchestrator: ["1f6a4f4b-9da3-4085-bd25-45a7255be88a"],
    },
  }}
/>
```
