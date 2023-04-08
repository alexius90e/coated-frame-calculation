import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const calculatorState = (state: RootState) => state.calculator;

const value = createSelector(calculatorState, (state) => state.value);

export const calculatorSelectors = { value };
