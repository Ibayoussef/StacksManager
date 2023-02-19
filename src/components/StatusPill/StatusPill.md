# StatusPill Component

A component for displaying the status of a stack in the form of a pill.

## Usage

```jsx
      <StatusPill isShared={true} />
      <StatusPill isShared={false} />
      <StatusPill button >Delete</StatusPill>
      <StatusPill button onClick={() => alert('clicked')} >Click Me</StatusPill>
```

## Props

| Prop name | Type       | Default value | Description                                                       |
| --------- | ---------- | ------------- | ----------------------------------------------------------------- |
| isShared  | boolean    | `false`       | Specifies whether the stack is shared or not                      |
| button    | boolean    | `false`       | Specifies whether the pill should be displayed as a button or not |
| fontSize  | number     | `1`           | Specifies the font size for the text inside the pill              |
| children  | ReactNode  | -             | Specifies the content of the pill                                 |
| onClick   | () => void | -             | Callback function to be called when the pill is clicked           |
