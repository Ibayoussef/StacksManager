import { configureStore } from "@reduxjs/toolkit";
import { stacksSlice, componentsSlice } from "../slices";
import { fetchStacks } from "../slices/stacksSlice";
import { fetchComponents } from "../slices/componentsSlice";
const store = configureStore({
  reducer: {
    stacks: stacksSlice,
    components: componentsSlice,
  },
});
store.dispatch(fetchStacks());
store.dispatch(fetchComponents());
export default store;
