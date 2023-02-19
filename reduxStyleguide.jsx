import React, { Component } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import stacksSlice from "./src/slices/stacksSlice.ts";
import componentsSlice from "./src/slices/componentsSlice.ts";
const initialState = {
  reducer: {
    stacks: stacksSlice,
    components: componentsSlice,
  },
};
const store = configureStore(initialState);
export default class Wrapper extends Component {
  render() {
    return <Provider store={store}>{this.props.children}</Provider>;
  }
}
