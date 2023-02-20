import {
  fetchComponents,
  componentsSlice,
  filterComponents,
} from "./componentsSlice";

describe("components slice", () => {
  let initialState;

  beforeEach(() => {
    initialState = {
      components: [],
      filteredComponents: [],
      status: "idle",
      error: "",
    };
  });

  it("should handle fetchComponents.pending", () => {
    const nextState = componentsSlice.reducer(
      initialState,
      fetchComponents.pending()
    );
    expect(nextState.status).toEqual("loading");
  });

  it("should handle fetchComponents.fulfilled", () => {
    const components = [
      { id: "1", name: "Component 1" },
      { id: "2", name: "Component 2" },
    ];
    const nextState = componentsSlice.reducer(
      initialState,
      fetchComponents.fulfilled(components)
    );
    expect(nextState.status).toEqual("succeeded");
    expect(nextState.components).toEqual(components);
  });

  it("should handle fetchComponents.rejected", () => {
    const error = { message: "An error occurred." };
    const nextState = componentsSlice.reducer(
      initialState,
      fetchComponents.rejected(error)
    );
    expect(nextState.status).toEqual("failed");
    expect(nextState.error).toEqual(error.message);
  });

  it("should handle filterComponents", () => {
    const components = [
      { id: "1", name: "Component 1" },
      { id: "2", name: "Component 2" },
      { id: "3", name: "Component 3" },
    ];
    const state = {
      components,
      filteredComponents: {},
      status: "succeeded",
      error: "",
    };
    const nextState = componentsSlice.reducer(
      state,
      filterComponents({ components: "2", id: "0" })
    );
    expect(nextState.filteredComponents[0]).toEqual([components[1]]);
  });

  it("should handle fetchComponents with an empty response", () => {
    const nextState = componentsSlice.reducer(
      initialState,
      fetchComponents.fulfilled([])
    );
    expect(nextState.status).toEqual("failed");
  });
});
