import { MaterialPipe } from './material-pipe.interface';

export interface MaterialSheet extends MaterialPipe {
  material: 'plastic' | 'metal';
}
