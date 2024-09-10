import GanttDAO from '@entities/gantt/gantt.dao';
import TaskDAO from '@entities/task/task.dao';
import { IUpdateGanttChart } from './gantt.feature.interface';
import { IGetGanttDATA } from '@entities/gantt/gantt.interface';
export default class GanttFeatureService {
    private ganttDAO;
    private taskDAO;
    constructor(ganttDAO: GanttDAO, taskDAO: TaskDAO);
    deleteGanttChart(data: IGetGanttDATA): Promise<void>;
    getGanttChart(data: IGetGanttDATA): Promise<import("../../database/entity/gantt/gant.entity").default>;
    applyChanges(data: IUpdateGanttChart): Promise<import("../../database/entity/gantt/gant.entity").default>;
}
