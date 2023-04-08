import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchMaterials } from './materials.thunk';
import { MaterialsListDTO } from 'src/models/materials-dto.type';

interface MaterialsState {
  isLoading: boolean;
  materials: MaterialsListDTO;
}

const initialState: MaterialsState = {
  isLoading: false,
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
      })
      .addCase(fetchMaterials.fulfilled, (state, action: PayloadAction<MaterialsListDTO>) => {
        state.isLoading = false;
        state.materials = action.payload;
      })
      .addCase(fetchMaterials.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const materialsActions = materialsSlice.actions;

export const materialsReducer = materialsSlice.reducer;
