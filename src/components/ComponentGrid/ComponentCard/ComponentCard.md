# ComponentCard

ComponentCard is a React functional component that renders a card displaying information about a Component.

## Props

- `component`: A required object that represents the component.

## Usage

```jsx
<ComponentCard
  component={{
    id: "1f6a4f4b-9da3-4085-bd25-45a7255be88a",
    created: "2022-11-23T15:14:43",
    updated: "2022-11-23T15:14:43",
    user: "ef99200c-807a-4efa-b006-303462d6680c",
    project: "8f55ff0d-bfbd-479c-a7d4-60af51236203",
    is_shared: false,
    name: "multi_tenant",
    type: "orchestrator",
    flavor: "kubeflow",
    configuration: {
      synchronous: false,
      timeout: 1200,
    },
  }}
/>
```
