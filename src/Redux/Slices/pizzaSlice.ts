import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { SortType } from "../../Sort/Sort";
import { StateType } from "../store";

type FetchType = {
    search: string;
    page: number;
    activeCategories: number;
    activeSort: SortType;
};

type PizzaType = {
    category: number;
    img: string;
    name: string;
    parId: string;
    price: number;
    rating: number;
    sizes: number[];
    types: number[];
}

interface PizzaSliceType {
    pizza: PizzaType[];
    loading: 'loading' | 'success' | 'error';
}

export const fetchPizza = createAsyncThunk<PizzaType[], FetchType>(
    'pizza/fetchPizzaStatus',
    async ({
        search,
        page,
        activeCategories,
        activeSort
    }) => {
        const { data } = await axios.get<PizzaType[]>(`https://636f3b22bb9cf402c8129fa2.mockapi.io/pizza?` +
    `search=${search}` +
    `&page=${page}` +
    `&limit=${4}`+ 
    `&${activeCategories > 0 ? `category=${activeCategories}` : ''}` +
    `&sortBy=${activeSort.sortProperty}&order=desc`);

    return data;
    }
)

const initialState: PizzaSliceType = {
    pizza: [],
    loading: 'loading',
};

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setPizza(state, action) {
            state.pizza = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizza.pending, (state) => {
            state.loading = 'loading';
            state.pizza = [];
        });

        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.loading = 'success';
            state.pizza = action.payload;
        });

        builder.addCase(fetchPizza.rejected, (state) => {
            state.loading = 'error';
            state.pizza = [];
        });
    }
});

export const selectPizza = (state: StateType) => state.pizza;

export const { setPizza } = pizzaSlice.actions;

export default pizzaSlice.reducer;