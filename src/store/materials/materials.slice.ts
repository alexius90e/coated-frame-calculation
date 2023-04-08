import { createSlice } from '@reduxjs/toolkit';

const materialsSlice = createSlice({
  name: 'materials',
  initialState: {
    width: 500,
    height: 20,
  },
  reducers: {},
});

export const materialsActions = materialsSlice.actions;

export const materialsReducer = materialsSlice.reducer;
