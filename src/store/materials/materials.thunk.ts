import { createAsyncThunk } from '@reduxjs/toolkit';
import materialsData from '../../assets/data.json';
import { MaterialsDTO } from 'src/models/materials-dto.type';

export const fetchMaterials = createAsyncThunk<MaterialsDTO, void>('materials/fetchMaterials', async () => {
  const response = await Promise.resolve({ data: materialsData as MaterialsDTO });
  return response.data;
});
