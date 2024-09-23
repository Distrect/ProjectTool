import { ITimeStamp } from '@common/tools';

export type ITaskPrimaryKey = {
  taskID: number;
};

export type ITaskDataPrimaryKey = {
  uuid: number;
};

export interface ITaskBase {
  taskName: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  progress: number;
}

export interface ITaskPert {
  optimisticTime: number;
  mostLikelyTime: number;
  pessimisticTime: number;
  successProbability: number;
}

export interface ITask
  extends ITaskBase,
    ITaskPrimaryKey,
    ITimeStamp,
    Partial<ITaskPert> {}

export type IResourceModel = {
  resourceID: number;
  resourceName: string;
};

export interface IGanttProperties {
  predecessor: any | null;
  durationUnit: any;
  parentID: number;
  isManual: boolean;
  resource: IResourceModel;
}

export interface ITaskEntity
  extends ITaskBase,
    ITimeStamp,
    Partial<ITaskPert>,
    Partial<IGanttProperties> {}
