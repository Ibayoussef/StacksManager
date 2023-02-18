import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComponentState } from "../Enums/ComponentState";
import { Component } from "../Enums/Component";

const initialState: ComponentState = {
  components: [],
  filteredComponents: [],
  status: "idle",
  error: "",
};

/**
 * @async function that fetches the components from the api and returns them
 *  @returns {Component[]} list of components
 * */
export const fetchComponents = createAsyncThunk(
  "components/fetchComponents",
  async () => {
    const response = await fetch("https://mqlc2m.deta.dev/components");
    const data = await response.json();
    return data;
  }
);

/**
 * redux slice for the components that takes the initialState and
 * since there will be no actions to manipulate the component state
 * the reducers is an empty object
 * @extraReducers handling the promise created by the {fetchComponents}
 * */
export const componentsSlice = createSlice({
  name: "components",
  initialState: initialState,
  reducers: {
    filterComponents: (state, action: PayloadAction<string>) => {
      const filterResult = state.components.filter((component: Component) =>
        action.payload.includes(component.id)
      );
      state.filteredComponents = filterResult;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComponents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComponents.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.components = action.payload;
      })
      .addCase(fetchComponents.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

export const { filterComponents } = componentsSlice.actions;

export default componentsSlice.reducer;
