import { ConfigCustom } from './config-custom.interface';
import { ConfigFix } from './config-fix.interface';
import { ConfigFrame } from './config-frame.interface';
import { ConfigSize } from './config-size.interface';

export interface ConfigDetails {
  length: ConfigSize;
  width: ConfigSize;
  frames: ConfigFrame[];
  materials: ConfigCustom[];
  fixes: ConfigFix[];
}
