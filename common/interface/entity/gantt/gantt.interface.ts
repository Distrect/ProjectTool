import { ITask } from 'common/interface/entity/task';
import { ITimeStamp, CreatedAtAttribute } from 'common/tools';

export type ProjectForeignKey = {
  projectID: number;
};

export interface IGantt extends Readonly<CreatedAtAttribute> {
  tasks: ITask[];
  projectStartDate?: Date;
  projectEndDate?: Date;
}

export interface IGantEntity
  extends IGantt,
    ProjectForeignKey,
    Readonly<ITimeStamp> {}
