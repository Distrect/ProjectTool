import GanttFeatureService from './gantt.feature.service';
import { IUpdateGanttChart } from './gantt.feature.interface';
export default class GanttFeatureController {
    private ganttFeatureService;
    constructor(ganttFeatureService: GanttFeatureService);
    applyChanges(data: IUpdateGanttChart): Promise<import("../../database/entity/gantt/gant.entity").default>;
}
