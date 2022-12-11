import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { StateType } from "../store";

type ItemBusketType = {  
    parId: string;
    img: string;
    name: string;
    types: number[];
    sizes: number[];
    price: number;
    rating: number;
    count: number;
    type: number;
    size: number;
};

interface BusketSliceType {
    totalPrice: number
    busketPizza: ItemBusketType[]
};

const data = localStorage.getItem('busket');

const initialState: BusketSliceType = {
    totalPrice: 0,
    busketPizza: data ? JSON.parse(data) : []
};

const busketSlice = createSlice({
    name: 'busket',
    initialState,
    reducers: {
        addBusketPizza(state, action: PayloadAction <ItemBusketType>) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));
            if (findItem) {
                findItem.count++
            } else {
            state.busketPizza.push(action.payload); 
        };
        },
        decreaseBusketPizza(state, action: PayloadAction <ItemBusketType>) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));

            if (action.payload.count < 2) {
                state.busketPizza = state.busketPizza.filter((item) => 
            (item !== findItem));
            } else {
                findItem && findItem.count--
            }
        },
        removeBusketPizza(state, action: PayloadAction <ItemBusketType>) {
            const findItem = state.busketPizza.find((item) => 
            (item.parId === action.payload.parId)&&
            (item.type === action.payload.type)&&
            (item.size === action.payload.size));
            state.busketPizza = state.busketPizza.filter((item) => 
            (item !== findItem));
        },
        clearBusketPizza(state) {
            state.busketPizza = []
        },
        setTotalPrice(state) {
            state.totalPrice = state.busketPizza.reduce((sum, pre) => {
                return sum + pre.price * pre.count }, 0)
        }
    },
});

export const selectBusket = (state: StateType) => state.busketPizza;

export const { addBusketPizza, removeBusketPizza, clearBusketPizza, decreaseBusketPizza, setTotalPrice } = busketSlice.actions;

export default busketSlice.reducer;