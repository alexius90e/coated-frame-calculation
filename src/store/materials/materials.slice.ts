import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMaterials } from './materials.thunk';
import { MaterialsDTO } from 'src/models/materials-dto.type';

interface MaterialsState {
  isLoading: boolean;
  materials: MaterialsDTO;
  isReady: boolean;
}

const initialState: MaterialsState = {
  isLoading: false,
  isReady: false,
  materials: [],
};

const materialsSlice = createSlice({
  name: 'materials',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMaterials.pending, (state): void => {
        state.isLoading = true;
        state.isReady = false;
      })
      .addCase(fetchMaterials.fulfilled, (state, action: PayloadAction<MaterialsDTO>) => {
        state.materials = action.payload;
        state.isLoading = false;
        state.isReady = true;
      })
      .addCase(fetchMaterials.rejected, (state) => {
        state.isLoading = false;
        state.isReady = false;
      });
  },
});

export const materialsActions = materialsSlice.actions;

export const materialsReducer = materialsSlice.reducer;
