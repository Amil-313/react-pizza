import { configureStore } from '@reduxjs/toolkit';
import filterPizza from './Slices/filterSlice';
import busketPizza from './Slices/busketSlice';
import pizza from './Slices/pizzaSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterPizza,
    busketPizza,
    pizza,
  },
})

export type StateType = ReturnType < typeof store.getState >;

export type DispatchType = typeof store.dispatch;
export const useDispatchApp = () => useDispatch<DispatchType>();