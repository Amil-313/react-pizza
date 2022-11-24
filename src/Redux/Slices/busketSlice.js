import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalPrice: 0,
    busketPizza: []
};

const busketSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        addBusketPizza(state, action) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));
            if (findItem) {
                findItem.count++
            } else {
            state.busketPizza.push(action.payload); 
        };
            state.totalPrice = state.busketPizza.reduce((sum, pre) => {
            return sum + pre.price * pre.count }, 0)
        },
        decreaseBusketPizza(state, action) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));

            if (action.payload.count < 2) {
                state.busketPizza = state.busketPizza.filter((item) => 
            (item !== findItem));
            } else {
                findItem.count--
            }
        },
        removeBusketPizza(state, action) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));
            state.busketPizza = state.busketPizza.filter((item) => 
            (item !== findItem));
        },
        clearBusketPizza(state) {
            state.busketPizza = []
        }
    },
});

export const { addBusketPizza, removeBusketPizza, clearBusketPizza, decreaseBusketPizza } = busketSlice.actions;

export default busketSlice.reducer;