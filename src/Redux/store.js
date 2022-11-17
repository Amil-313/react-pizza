import { configureStore } from '@reduxjs/toolkit';
import filterPizza from './Slices/filterSlice';

export const store = configureStore({
  reducer: {
    filterPizza,
  },
})