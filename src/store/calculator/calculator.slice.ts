import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CalculatorValue } from 'src/models/calculator-value.interface';

interface CalculatorState {
  value: CalculatorValue;
}

const initialState: CalculatorState = {
  value: {
    sheet: '',
    pipe: '',
    width: 0,
    length: 0,
    frame: '',
  },
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue(state, action: PayloadAction<CalculatorValue>) {
      state.value = action.payload;
    },
  },
});

export const calculatorActions = calculatorSlice.actions;

export const calculatorReducer = calculatorSlice.reducer;
