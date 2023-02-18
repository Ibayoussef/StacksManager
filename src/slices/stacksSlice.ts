import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stack } from "../Enums/Stack";
import { StacksState } from "../Enums/StacksState";
import { Filters } from "../Enums/Filters";

const initialState: StacksState = {
  stacks: [],
  searchResult: [],
  users: [],
  filters: {
    author: "",
    shared: false,
    inactive: false,
    created: "",
  },
  searchValue: "",
  status: "idle",
  error: "",
};

export const fetchStacks = createAsyncThunk("stacks/fetchStacks", async () => {
  const response = await fetch("https://mqlc2m.deta.dev/stacks");
  const data = await response.json();
  return data;
});

export const stacksSlice = createSlice({
  name: "stacks",
  initialState: initialState,
  reducers: {
    searchStack: (state, action: PayloadAction<string>) => {
      const searchResult = state.stacks.filter(
        (stack: Stack) =>
          stack.id.toLowerCase().includes(action.payload.toLowerCase()) ||
          stack.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      state.searchResult = searchResult;
      state.searchValue = action.payload;
    },
    getUsers: (state) => {
      const users = state.stacks.map((stack: Stack) => stack.user);
      const filteredUsers = users.filter(
        (item, index) => users.indexOf(item) === index
      );
      state.users = filteredUsers;
    },
    storeFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStacks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStacks.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stacks = action.payload;
      })
      .addCase(fetchStacks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

export const { searchStack, getUsers, storeFilters } = stacksSlice.actions;

export default stacksSlice.reducer;
