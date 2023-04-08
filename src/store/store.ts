import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { materialsReducer } from './materials/materials.slice';

export const store = configureStore({
  reducer: {
    materials: materialsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
