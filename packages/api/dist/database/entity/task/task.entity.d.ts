import GanttEntity from '@entities/gantt/gant.entity';
import { PredecessorType } from 'cocogantt-shared';
export default class TaskEntity {
    taskID: number;
    taskName: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    progress: number;
    optimisticTime?: number | null;
    pessimisticTime?: number | null;
    mostLikelyTime?: number | null;
    successProbability?: number | null;
    crashDay?: number | null;
    crashCost?: number | null;
    normalCost?: number | null;
    parentID?: number | null;
    level: number;
    index: PredecessorType;
    gantt: GanttEntity;
    createdAt: Date;
    updatedAt: Date;
}
