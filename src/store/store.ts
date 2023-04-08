import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { materialsReducer } from './materials/materials.slice';
import { calculatorConfigReducer } from './calculatorConfig/calculator-config.slice';
import { calculatorReducer } from './calculator/calculator.slice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
    calculatorConfig: calculatorConfigReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
