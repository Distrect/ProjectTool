import { IProjectEntity, ITaskEntity } from '@common/interface';
import { ITimeStamp } from '@common/tools';

export type ProjectForeignKey = {
  project: IProjectEntity;
};

export interface IGantt {
  tasks: ITaskEntity[];
  projectStartDate?: Date;
  projectEndDate?: Date;
}

export interface IGantEntity
  extends IGantt,
    ProjectForeignKey,
    Readonly<ITimeStamp> {}
