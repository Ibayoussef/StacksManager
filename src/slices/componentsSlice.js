import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
/**
 * The initial state for the component slice, which includes an empty array of components,
 *  an empty array of filtered components, a status of "idle", and no error message.
 */
const initialState = {
    components: [],
    filteredComponents: {},
    status: "idle",
    error: "",
};
/**
 * Async function that fetches the components from the API and returns them
 * @returns {Promise<Component[]>} List of components
 */
export const fetchComponents = createAsyncThunk("components/fetchComponents", async () => {
    const response = await fetch("https://mqlc2m.deta.dev/components");
    const data = await response.json();
    return data;
});
/**
 * Redux slice for the components.
 * @extraReducers Handling the promise created by the {fetchComponents}
 */
export const componentsSlice = createSlice({
    name: "components",
    initialState: initialState,
    reducers: {
        /**
        Filter components by ID.
        @function
        @name filterComponents
        @param {ComponentState} state - Current state.
        @param {import("@reduxjs/toolkit").PayloadAction<string>} action - Action with the payload of the ID.
        */
        filterComponents: (state, action) => {
            const filterResult = state.components.filter((component) => action.payload.components.includes(component.id));
            if (!Object.keys(state.filteredComponents).includes(action.payload.id)) {
                Object.assign(state.filteredComponents, {
                    [action.payload.id]: filterResult,
                });
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchComponents.pending, (state) => {
            state.status = "loading";
        })
            .addCase(fetchComponents.fulfilled, (state, action) => {
            state.components = action.payload;
            state.status = action.payload.length > 0 ? "succeeded" : "failed";
        })
            .addCase(fetchComponents.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    },
});
/**
 * An action creator function that dispatches a filterComponents action, which filters the components array and updates the filteredComponents array.
 */
export const { filterComponents } = componentsSlice.actions;
/**
 * The reducer function for the components slice.
 */
export default componentsSlice.reducer;
