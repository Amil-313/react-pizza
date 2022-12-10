import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "../store";
import { SortType } from "../../Sort/Sort";

interface FilterType {
    activeCategories: number;
    page: number;
    activeSort: SortType;
}

export type ArgumentsFilterType = {
    category: number;
    page: number;
    sort: SortType;
}

const initialState: FilterType = {
    activeCategories: 0,
    page: 1,
    activeSort: {
        name: "популярности", 
        sortProperty: 'rating'
    }
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setActiveCategories(state, action: PayloadAction <number>) {
            state.activeCategories = action.payload;
        },
        setActiveSort(state, action: PayloadAction <SortType>) {
            state.activeSort = action.payload;
        },
        setPage(state, action: PayloadAction <number>) {
            state.page = action.payload;
        },
        setFilter(state, action: PayloadAction <ArgumentsFilterType>) {
            state.activeCategories = action.payload.category;
            state.page = action.payload.page;
            state.activeSort = action.payload.sort;
        }
    },
});

export const selectFilter = (state: StateType) => state.filterPizza;

export const { setActiveCategories, setActiveSort, setPage, setFilter } = filterSlice.actions;

export default filterSlice.reducer;