import { MaterialCustom } from './material-custom.interface';
import { MaterialPipe } from './material-pipe.interface';
import { MaterialSheet } from './material-sheet.interface';

export type MaterialsDTO = (MaterialCustom | MaterialPipe | MaterialSheet)[];
