import ProjectEntity from '@entities/project/project.entity';
import { CocomoMode } from 'cocogantt-shared';
export default class CocomoEntity {
    cocomoID: number;
    mode: CocomoMode;
    kloc: number;
    project: ProjectEntity;
}
