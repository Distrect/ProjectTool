import { ITask } from './../../database/entity/task/task.interface';
type ChangeState = 'Unchanged' | 'Deleted' | 'Updated' | 'Created';
export interface ITaskChangeDTO extends Omit<ITask, 'taskID' | 'gantt' | 'createdAt' | 'updatedAt'> {
    taskID?: number;
    ganttID?: number;
    state: ChangeState;
}
export interface IUpdateGanttChart {
    ganttID: number;
    tasks: ITaskChangeDTO[];
}
export interface IGetGanttChart {
    projectID: number;
}
export {};
