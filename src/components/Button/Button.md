# React Button Component Documentation

This component represents a reusable button that can be used throughout your application.

## Usage

To use the `Button` component, import it from the file where it's located, and then include it in your JSX code, passing the required `onClick` prop and any optional `fontSize` prop and `children` prop.

```jsx
<Button onClick={handleClick} fontSize={2}>
  Click me
</Button>
```

## Props

The `Button` component accepts the following props:

- `fontSize` (optional): A number representing the font size in rem units. Defaults to 1 if not provided.
- `children` (optional): A React node that will be rendered inside the button. This can be text, an icon, or any other valid React element.
- `onClick` (required): A function that will be called when the button is clicked.
