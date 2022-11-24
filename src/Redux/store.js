import { configureStore } from '@reduxjs/toolkit';
import filterPizza from './Slices/filterSlice';
import busketPizza from './Slices/busketSlice';

export const store = configureStore({
  reducer: {
    filterPizza,
    busketPizza,
  },
})