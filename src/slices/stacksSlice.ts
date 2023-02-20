import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Stack } from "../Enums/Stack";
import { StacksState } from "../Enums/StacksState";
import { Filters } from "../Enums/Filters";
import { startOfDay } from "date-fns";

/**

@typedef {Object} StacksState - Stacks slice state object.
@property {Array.<Stack>} stacks - Array of stacks.
@property {Array.<Stack>} searchResult - Array of stacks to show as search results.
@property {Array.<string>} users - Array of unique user names from the stacks.
@property {Filters} filters - Filters object for filtering stacks.
@property {string} searchValue - Search value to filter stacks by name or id.
@property {string} status - Status of the fetchStacks asynchronous thunk.
@property {string} error - Error message in case fetchStacks fails.
*/
const initialState: StacksState = {
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

/**

Async function to fetch stacks from server.
@function
@name fetchStacks
@returns {Promise<Array.<Stack>>} Promise that resolves to an array of Stack objects.
*/

export const fetchStacks = createAsyncThunk("stacks/fetchStacks", async () => {
  const response = await fetch("https://mqlc2m.deta.dev/stacks");
  const data = await response.json();
  return data;
});

/**

* Stacks slice object.
* @name stacksSlice
* @type {Object}
* @property {string} name - Name of the slice.
* @property {StacksState} initialState - Initial state of the slice.
* @property {Object} reducers - Reducer functions to update the state.
* @property {function} reducers.searchStack - Reducer function to search stacks by name or id.
* @property {function} reducers.getUsers - Reducer function to get unique user names from the stacks.
* @property {function} reducers.storeFilters - Reducer function to store filters object for filtering stacks.
* @property {function} reducers.filterStacks - Reducer function to filter stacks based on the stored filters.
* @property {Object} extraReducers - Extra reducer functions for handling fetchStacks.
  */

export const stacksSlice = createSlice({
  name: "stacks",
  initialState: initialState,
  reducers: {
    /**
     * @function
     * @name searchStack
     * @param {StacksState} state - The current state.
     *  @param {PayloadAction<string>} action - The action containing the search value.
     */
    searchStack: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    /**
     * @function
     * @name getUsers
     * @param {StacksState} state - The current state.
     */
    getUsers: (state) => {
      const users = state.stacks.map((stack: Stack) => stack.user);
      const filteredUsers = users.filter(
        (item, index) => users.indexOf(item) === index
      );
      state.users = filteredUsers;
    },
    /**
     * @function
     * @name storeFilters
     * @param {StacksState} state - The current state
     * @param {PayloadAction<Filters>} action - The action containing the filters
     */
    storeFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload;
    },
    /**
     * @name filterStacks
     * @param {Object} state - The current state of the stacks.
     * @param {Object} state.searchResult - The array of stacks to be filtered.
     * @param {Object} state.stacks - The original array of stacks.
     * @param {Object} state.filters - The filter options selected by the user.
     * @param {string} state.filters.author - The name of the author to filter by.
     * @param {boolean} state.filters.shared - A flag indicating whether to include only shared stacks.
     * @param {boolean} state.filters.inactive - A flag indicating whether to include only inactive stacks.
     * @param {Object} state.filters.created - The date range to filter by.
     * @param {string} state.filters.created.startDate - The start date of the range.
     * @param {string} state.filters.created.endDate - The end date of the range.
     * @returns {void}
     */
    filterStacks: (state) => {
      state.searchResult = state.stacks;
      // Filter by author
      if (state.filters.author) {
        state.searchResult = state.searchResult.filter(
          (stack: Stack) => stack.user === state.filters.author
        );
      }

      // Filter by shared status
      if (state.filters.shared) {
        state.searchResult = state.searchResult.filter(
          (stack: Stack) => stack.is_shared
        );
      }

      // Filter by inactive status
      if (state.filters.inactive) {
        state.searchResult = state.searchResult.filter(
          (stack: Stack) => !stack.is_shared
        );
      }

      if (
        state.filters.created &&
        state.filters.created.startDate !== "" &&
        state.filters.created.endDate !== "" &&
        state.filters.created.startDate === state.filters.created.endDate
      ) {
        state.searchResult = state.searchResult.filter((stack: Stack) => {
          const stackCreatedDate = startOfDay(
            new Date(stack.created)
          ).getTime();
          const startDate = new Date(state.filters.created.startDate).getTime();

          return stackCreatedDate === startDate;
        });
      }
      // Filter by creation date range
      if (
        state.filters.created &&
        state.filters.created.startDate !== "" &&
        state.filters.created.endDate !== "" &&
        state.filters.created.startDate !== state.filters.created.endDate
      ) {
        state.searchResult = state.searchResult.filter((stack: Stack) => {
          const stackCreatedDate = new Date(stack.created).getTime();
          const startDate = new Date(state.filters.created.startDate).getTime();
          const endDate = new Date(state.filters.created.endDate).getTime();
          return stackCreatedDate >= startDate && stackCreatedDate <= endDate;
        });
      }
      if (state.searchValue) {
        state.searchResult = state.searchResult.filter(
          (stack: Stack) =>
            stack.id.toLowerCase().includes(state.searchValue.toLowerCase()) ||
            stack.name.toLowerCase().includes(state.searchValue.toLowerCase())
        );
      }
      if (
        !state.searchResult &&
        state.filters.created.startDate === "" &&
        state.filters.created.endDate === "" &&
        !state.filters.inactive &&
        !state.filters.shared &&
        !state.filters.author
      ) {
        state.searchResult = state.stacks;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStacks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStacks.fulfilled, (state, action) => {
        state.stacks = action.payload;

        state.status = action.payload.length > 0 ? "succeeded" : "failed";
      })
      .addCase(fetchStacks.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
});

export const { searchStack, getUsers, storeFilters, filterStacks } =
  stacksSlice.actions;

export default stacksSlice.reducer;
