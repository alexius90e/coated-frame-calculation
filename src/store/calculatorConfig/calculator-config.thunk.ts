import { createAsyncThunk } from '@reduxjs/toolkit';
import config from '../../assets/config.json';
import { ConfigDTO } from 'src/models/config-dto.type';

export const fetchCalculatorConfig = createAsyncThunk<ConfigDTO, void>(
  'calculatorConfig/fetchCalculatorConfig',
  async () => {
    const response = await Promise.resolve({ data: config });
    return response.data;
  },
);
