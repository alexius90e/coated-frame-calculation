import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ConfigSize } from 'src/models/config-size.interface';
import { ConfigFrame } from 'src/models/config-frame.interface';
import { ConfigCustom } from 'src/models/config-custom.interface';
import { ConfigFix } from 'src/models/config-fix.interface';
import { ConfigDetails } from 'src/models/config-details.interface';

const calculatorConfigState = (state: RootState) => state.calculatorConfig;

const length = createSelector(calculatorConfigState, (state): ConfigSize => {
  const [length] = state.config.filter((item) => item.type === 'size' && item.key === 'length');
  return length as ConfigSize;
});

const width = createSelector(calculatorConfigState, (state): ConfigSize => {
  const [width] = state.config.filter((item) => item.type === 'size' && item.key === 'width');
  return width as ConfigSize;
});

const size = createSelector(calculatorConfigState, length, width, (_, lengthConfig, widthConfig) => {
  return { length: lengthConfig, width: widthConfig };
});

const frames = createSelector(calculatorConfigState, (state): ConfigFrame[] => {
  const frameItems = state.config.filter((item) => item.type === 'frame');
  return frameItems as ConfigFrame[];
});

const materials = createSelector(calculatorConfigState, (state): ConfigCustom[] => {
  const materialItems = state.config.filter((item) => item.type === 'material');
  return materialItems as ConfigCustom[];
});

const fixes = createSelector(calculatorConfigState, (state): ConfigFix[] => {
  const fixItems = state.config.filter((item) => item.type === 'fix');
  return fixItems as ConfigFix[];
});

const config = createSelector(
  calculatorConfigState,
  size,
  frames,
  materials,
  fixes,
  (_, sizeConfig, framesConfig, materialsConfig, fixesConfig): ConfigDetails => ({
    length: sizeConfig.length,
    width: sizeConfig.width,
    frames: framesConfig,
    materials: materialsConfig,
    fixes: fixesConfig,
  }),
);

export const calculatorConfigSelectors = { config, length, width, size, frames, materials, fixes };
