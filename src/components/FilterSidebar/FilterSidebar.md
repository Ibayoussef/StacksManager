# FilterSidebar Component

The `FilterSidebar` component is a React functional component that displays a list of filters in a sidebar. It receives a prop called `sidebarActive` which is an object that contains the `state` of the sidebar and an `action` to change the `state` of the sidebar.

## Props

- `sidebarActive`: an object containing the following properties:
  - `state`: a boolean that determines whether the sidebar is active or not
  - `action`: a function that changes the state of the sidebar

## Dependencies

- React
- Flex component from "../Flex/Flex"
- Typography component from "../Typography/Typography"
- close.svg image from "../../assets/close.svg"
- DropdownInput component from "./DropdownInput/DropdownInput"
- Checkbox component from "./Checkbox/Checkbox"
- DateRange component from "react-date-range"
- useDispatch function from "react-redux"
- useSelector function from "react-redux"
- storeFilters action from "../../slices/stacksSlice"
- StatusPill component from "../StatusPill/StatusPill"

## Usage

```jsx
import { Provider } from "react-redux";
import { useState } from "react";
const [sidebarActive, setSidebarActive] = useState(false);
<div>
  <button onClick={() => setSidebarActive(true)}>Open Sidebar</button>
  <FilterSidebar
    sidebarActive={{ state: sidebarActive, action: setSidebarActive }}
  />
</div>;
```
