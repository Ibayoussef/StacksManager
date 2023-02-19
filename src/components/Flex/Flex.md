# Flex Component

The `Flex` component is a reusable React component that provides a flexible layout using CSS `flexbox`.

## Usage

```jsx
<Flex
  direction="row"
  justify="center"
  align="center"
  gap={10}
  className="my-class"
  textAlign="center"
>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Flex>
```

## Props

The `Flex` component accepts the following props:

| Prop name   | Type                                                                             | Default        | Description                                                 |
| ----------- | -------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------- |
| `direction` | `"row"` or `"column"`                                                            | `"row"`        | The direction of the flex container.                        |
| `justify`   | `"center"`, `"flex-start"`, `"flex-end"`, `"space-between"`, or `"space-around"` | `"flex-start"` | The horizontal alignment of the items within the container. |
| `align`     | `"center"`, `"flex-start"`, `"flex-end"`, `"space-between"`, or `"space-around"` | `"stretch"`    | The vertical alignment of the items within the container.   |
| `gap`       | number                                                                           | `0`            | The size of the gap between items in the container.         |
| `className` | string                                                                           | `""`           | Additional class name to apply to the container.            |
| `textAlign` | `"left"`, `"right"`, or `"center"`                                               | `"left"`       | The horizontal alignment of the text within the items.      |
| `children`  | `ReactNode`                                                                      |                | The content to be rendered within the container.            |
