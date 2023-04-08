import { createAsyncThunk } from '@reduxjs/toolkit';
import materialsData from '../../assets/data.json';
import { MaterialsListDTO } from 'src/models/materials-dto.type';

export const fetchMaterials = createAsyncThunk<MaterialsListDTO, void>('materials/fetchMaterials', async () => {
  const response = await Promise.resolve({ data: materialsData as MaterialsListDTO });
  return response.data;
});
