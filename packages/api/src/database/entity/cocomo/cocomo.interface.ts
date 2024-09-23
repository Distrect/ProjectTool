import type { CocomoEntity } from '@entities/cocomo/cocomo.entity';
import type { ProjectEntity } from '@entities/project/project.entity';
import { CocomoMode } from '@common/index';

export interface ICreateCocomoDATA {
  mode: CocomoMode;
  kloc: number;
  project?:
    | {
        projectID: number;
      }
    | ProjectEntity;
}

export type IGetCocomoDATA =
  | { cocomoID: number }
  | { project: { projectID: number } }
  | { project: { projectID: number }; cocomoID: number };

export type IUpdateCocomoDATA = Partial<Omit<CocomoEntity, 'cocomoID'>>;
