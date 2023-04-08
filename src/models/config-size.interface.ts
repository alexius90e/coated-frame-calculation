import { ConfigCustom } from './config-custom.interface';

export interface ConfigSize extends ConfigCustom {
  min: number;
  max: number;
  step: number;
}
