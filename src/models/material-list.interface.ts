import { MaterialPipe } from './material-pipe.interface';

export interface MaterialList extends MaterialPipe {
  material: 'plastic' | 'metal';
}
