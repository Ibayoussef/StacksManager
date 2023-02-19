# Typography Component

A component for displaying text with options for boldness, font size, and text overflow.

## Props

| Prop Name      | Type      | Default Value | Description                           |
| -------------- | --------- | ------------- | ------------------------------------- |
| `children`     | `node`    |               | The text that will be rendered        |
| `bold`         | `boolean` | `false`       | Adds boldness to the typography       |
| `fontSize`     | `number`  | `1`           | Specifies the font size in `rem`      |
| `textOverflow` | `boolean` | `false`       | Adds text overflow to the typography. |

## Usage

```js
      <Typography>Regular text</Typography>
      <Typography bold>Bold text</Typography>
      <Typography fontSize={1.5}>Large text</Typography>
      <Typography textOverflow>Long text that overflows</Typography>
```
