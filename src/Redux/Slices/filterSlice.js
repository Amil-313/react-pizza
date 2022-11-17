import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    activeCategories: 0,
};

let filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategories(state, action) {
            state.activeCategories = action.payload;
        },
    },
});

export let { setActiveCategories } = filterSlice.actions;

export default filterSlice.reducer;