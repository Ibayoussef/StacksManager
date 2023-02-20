import { stacksSlice } from "./stacksSlice";

describe("stacksSlice", () => {
  const initialState = {
    stacks: [],
    searchResult: [],
    users: [],
    filters: {
      author: "",
      shared: false,
      inactive: false,
      created: { startDate: "", endDate: "" },
    },
    searchValue: "",
    status: "idle",
    error: "",
  };

  it("should handle initial state", () => {
    expect(stacksSlice.reducer(undefined, { type: "unknown" })).toEqual(
      initialState
    );
  });

  it("should handle searchStack", () => {
    const name = "test";
    const payload = { payload: name };
    const state = {
      ...initialState,
      stacks: [
        { id: "1", name: "test" },
        { id: "2", name: "other" },
      ],
      searchResult: [
        { id: "1", name: "test" },
        { id: "2", name: "other" },
      ],
      searchValue: "",
    };

    const searchResult = [{ id: "1", name: "test" }];
    const expected = {
      ...state,
      searchValue: name,
    };

    expect(
      stacksSlice.reducer(state, { type: "stacks/searchStack", ...payload })
    ).toEqual(expected);
  });

  it("should handle getUsers", () => {
    const state = {
      ...initialState,
      stacks: [
        { id: "1", name: "test1", user: "user1" },
        { id: "2", name: "test2", user: "user2" },
        { id: "3", name: "test3", user: "user1" },
      ],
    };

    const expected = {
      ...state,
      users: ["user1", "user2"],
    };

    expect(stacksSlice.reducer(state, { type: "stacks/getUsers" })).toEqual(
      expected
    );
  });

  it("should handle storeFilters", () => {
    const filters = {
      author: "user1",
      shared: true,
      inactive: false,
      created: { startDate: "", endDate: "" },
    };
    const payload = { payload: filters };

    const expected = {
      ...initialState,
      filters: filters,
    };

    expect(
      stacksSlice.reducer(initialState, {
        type: "stacks/storeFilters",
        ...payload,
      })
    ).toEqual(expected);
  });
  it("should filter stacks by author name", () => {
    const stacks = [
      { id: 1, name: "Stack 1", user: "user1", is_shared: true },
      { id: 2, name: "Stack 2", user: "user2", is_shared: true },
      { id: 3, name: "Stack 3", user: "user1", is_shared: false },
      { id: 4, name: "Stack 4", user: "user3", is_shared: false },
    ];

    const initialState = {
      stacks: stacks,
      searchResult: stacks,
      users: ["user1", "user2", "user3"],
      filters: {
        author: "user1",
        shared: false,
        inactive: false,
        created: { startDate: "", endDate: "" },
      },
      searchValue: "",
      status: "idle",
      error: "",
    };

    const newState = stacksSlice.reducer(
      initialState,
      stacksSlice.actions.filterStacks()
    );

    expect(newState.searchResult).toEqual([
      { id: 1, name: "Stack 1", user: "user1", is_shared: true },
      { id: 3, name: "Stack 3", user: "user1", is_shared: false },
    ]);
  });

  it("should filter stacks by shared status", () => {
    const stacks = [
      { id: 1, name: "Stack 1", user: "user1", is_shared: true },
      { id: 2, name: "Stack 2", user: "user2", is_shared: true },
      { id: 3, name: "Stack 3", user: "user1", is_shared: false },
      { id: 4, name: "Stack 4", user: "user3", is_shared: false },
    ];

    const initialState = {
      stacks: stacks,
      searchResult: stacks,
      users: ["user1", "user2", "user3"],
      filters: {
        author: "",
        shared: true,
        inactive: false,
        created: { startDate: "", endDate: "" },
      },
      searchValue: "",
      status: "idle",
      error: "",
    };

    const newState = stacksSlice.reducer(
      initialState,
      stacksSlice.actions.filterStacks()
    );

    expect(newState.searchResult).toEqual([
      { id: 1, name: "Stack 1", user: "user1", is_shared: true },
      { id: 2, name: "Stack 2", user: "user2", is_shared: true },
    ]);
  });

  it("should filter stacks by inactive status", () => {
    const stacks = [
      { id: 1, name: "Stack 1", user: "user1", is_shared: true },
      { id: 2, name: "Stack 2", user: "user2", is_shared: true },
      { id: 3, name: "Stack 3", user: "user1", is_shared: false },
      { id: 4, name: "Stack 4", user: "user3", is_shared: false },
    ];
    const initialState = {
      stacks: stacks,
      searchResult: stacks,
      users: ["user1", "user2", "user3"],
      filters: {
        author: "",
        shared: false,
        inactive: true,
        created: { startDate: "", endDate: "" },
      },
      searchValue: "",
      status: "idle",
      error: "",
    };
    const newState = stacksSlice.reducer(
      initialState,
      stacksSlice.actions.filterStacks()
    );
    expect(newState.searchResult).toEqual([
      { id: 3, name: "Stack 3", user: "user1", is_shared: false },
      { id: 4, name: "Stack 4", user: "user3", is_shared: false },
    ]);
  });
  it("should filter stacks by dates", () => {
    const stacks = [
      { id: 1, user: "Alice", is_shared: true, created: "2022-01-01" },
      { id: 2, user: "Bob", is_shared: true, created: "2022-01-02" },
      { id: 3, user: "Charlie", is_shared: false, created: "2022-01-03" },
      { id: 4, user: "Dave", is_shared: false, created: "2022-01-04" },
    ];
    const initialState = {
      stacks,
      searchResult: stacks,
      filters: {
        author: "",
        shared: false,
        inactive: false,
        created: {
          startDate: new Date("2022-01-02"),
          endDate: new Date("2022-01-03"),
        },
      },
      searchValue: "",
      status: "idle",
      error: "",
    };

    const newState = stacksSlice.reducer(
      initialState,
      stacksSlice.actions.filterStacks()
    );

    expect(newState.searchResult).toEqual([
      { id: 2, user: "Bob", is_shared: true, created: "2022-01-02" },
      { id: 3, user: "Charlie", is_shared: false, created: "2022-01-03" },
    ]);
  });
});
