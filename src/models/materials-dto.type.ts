import { MaterialCustom } from './material-custom.interface';
import { MaterialList } from './material-list.interface';
import { MaterialPipe } from './material-pipe.interface';

export type MaterialsListDTO = (MaterialCustom | MaterialPipe | MaterialList)[];
