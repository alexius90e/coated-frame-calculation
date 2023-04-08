import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { MaterialList } from 'src/models/material-list.interface';
import { MaterialPipe } from 'src/models/material-pipe.interface';
import { MaterialCustom } from 'src/models/material-custom.interface';

const materialsState = (state: RootState) => state.materials;

const allFrames = createSelector(materialsState, (state): MaterialList[] => {
  return state.materials.filter((material) => material.type === 'list') as MaterialList[];
});

const allPipes = createSelector(materialsState, (state): MaterialPipe[] => {
  return state.materials.filter((material) => material.type === 'pipe') as MaterialPipe[];
});

const allFixes = createSelector(materialsState, (state): MaterialCustom[] => {
  return state.materials.filter((material) => material.type === 'fix') as MaterialCustom[];
});

const allMaterials = createSelector(materialsState, allFrames, allPipes, allFixes, (_, frames, pipes, fixes) => {
  return { frames, pipes, fixes };
});

export const materialSelectors = {
  allFrames,
  allPipes,
  allFixes,
  allMaterials,
};
