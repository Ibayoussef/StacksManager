# Grid Component

This component displays a grid of component cards by fetching filtered components from the Redux store using the `useSelector` hook.

## Props

This component does not accept any props.

## Explanation

The `Grid` component is a functional component that renders a `Flex` component with a `direction` of "row", `gap` of 26, `justify` of "center", `className` of "grid", and `align` of "flex-start". Within the `Flex` component, it maps through the `filteredComponents` array and renders a `ComponentCard` component for each `component` in the array. The `key` for each `ComponentCard` is set to the `component.id`, and the `component` prop is set to the current `component`.

The `filteredComponents` array is fetched from the Redux store using the `useSelector` hook, which takes a function that selects the desired data from the Redux state. In this case, the `filteredComponents` array is selected from the `components` slice of the state.

The `Grid` component is exported as the default export of the module, so it can be imported and used in other components or files.
