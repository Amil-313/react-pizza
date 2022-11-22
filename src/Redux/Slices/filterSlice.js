import { createSlice } from "@reduxjs/toolkit";
import { popapList } from '../../Sort/Sort';

let initialState = {
    activeCategories: 0,
    page: 1,
    activeSort: popapList[0]
};

let filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategories(state, action) {
            state.activeCategories = action.payload;
        },
        setActiveSort(state, action) {
            state.activeSort = action.payload;
        },
        setPage(state, action) {
            state.page = action.payload;
        },
        setFilter(state, action) {
            state.activeCategories = Number(action.payload.category);
            state.page = Number(action.payload.page);
            state.activeSort = action.payload.sort;
        }
    },
});

export let { setActiveCategories, setActiveSort, setPage, setFilter } = filterSlice.actions;

export default filterSlice.reducer;