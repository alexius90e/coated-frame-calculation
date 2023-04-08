import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MaterialSheet } from 'src/models/material-sheet.interface';
import { MaterialPipe } from 'src/models/material-pipe.interface';
import { MaterialCustom } from 'src/models/material-custom.interface';

const materialsState = (state: RootState) => state.materials;

const allSheets = createSelector(materialsState, (state): MaterialSheet[] => {
  return state.materials.filter((material) => material.type === 'list') as MaterialSheet[];
});

const allPipes = createSelector(materialsState, (state): MaterialPipe[] => {
  return state.materials.filter((material) => material.type === 'pipe') as MaterialPipe[];
});

const allFixes = createSelector(materialsState, (state): MaterialCustom[] => {
  return state.materials.filter((material) => material.type === 'fix') as MaterialCustom[];
});

const allMaterials = createSelector(materialsState, allSheets, allPipes, allFixes, (_, sheets, pipes, fixes) => {
  return { sheets, pipes, fixes };
});

export const materialSelectors = {
  allSheets,
  allPipes,
  allFixes,
  allMaterials,
};
