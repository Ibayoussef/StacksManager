# Header Component

This component is used to display the header section of the dropdown component. The header displays the name of the dropdown, the number of components, and a collapse button. The header component is created using React and utilizes the useDispatch hook to manage the state of the component.

## Props

- `collapse`: An object containing a boolean state and a function to set the state.
- `name`: A string that represents the name of the dropdown.
- `isShared`: A boolean value that determines whether the dropdown is shared.
- `componentsNumber`: A number that represents the total number of components.
- `components`: An object that contains information about the components.

## Usage

```jsx
import { useState } from "react";
const [state, setState] = useState(false);
<Header
  collapse={{ state: state, action: setState }}
  name={"test-component"}
  isShared={true}
  componentsNumber={1}
  components={["1f6a4f4b-9da3-4085-bd25-45a7255be88a"]}
/>;
```
