import GanttEntity from '@entities/gantt/gant.entity';
import { IGetGanttDATA } from '@entities/gantt/gantt.interface';
import { Repository } from 'typeorm';
export default class GanttDAO {
    private ganttRepository;
    constructor(ganttRepository: Repository<GanttEntity>);
    getGanttWithTasks(args: IGetGanttDATA): Promise<GanttEntity>;
    deleteGantt(args: IGetGanttDATA): Promise<void>;
}
