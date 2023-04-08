import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ConfigDTO } from 'src/models/config-dto.type';
import { fetchCalculatorConfig } from './calculator-config.thunk';

interface CalculatorConfigState {
  isLoading: boolean;
  config: ConfigDTO;
}

const initialState: CalculatorConfigState = {
  isLoading: false,
  config: [],
};

const calculatorConfigSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCalculatorConfig.pending, (state): void => {
        state.isLoading = true;
      })
      .addCase(fetchCalculatorConfig.fulfilled, (state, action: PayloadAction<ConfigDTO>) => {
        state.isLoading = false;
        state.config = action.payload;
      })
      .addCase(fetchCalculatorConfig.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const calculatorConfigActions = calculatorConfigSlice.actions;

export const calculatorConfigReducer = calculatorConfigSlice.reducer;
