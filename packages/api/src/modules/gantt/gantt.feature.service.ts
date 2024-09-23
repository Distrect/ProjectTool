import { Injectable } from '@nestjs/common';
import { GanttDAO } from '@entities/gantt/gantt.dao';
import { IUpdateGanttChart } from './gantt.feature.interface';
import { IGetGanttDATA } from '@entities/gantt/gantt.interface';

@Injectable()
export class GanttFeatureService {
  constructor(
    private ganttDAO: GanttDAO,
    // private taskDAO: TaskDAO,
  ) {}

  public async deleteGanttChart(data: IGetGanttDATA) {
    return await this.ganttDAO.deleteGantt(data);
  }

  public async getGanttChart(data: IGetGanttDATA) {
    return await this.ganttDAO.getGanttWithTasks(data);
  }

  public async applyChanges(data: IUpdateGanttChart) {
    const updatedTasks: any[] = [];
    const deletedTasks: any[] = [];
    const createdTasks: any[] = [];

    for (const task of data.tasks) {
      if (task.state === 'Unchanged') continue;

      switch (task.state) {
        case 'Created':
          const { taskID, ...rest } = task;
          createdTasks.push(rest);
          break;

        case 'Deleted':
          if (task.taskID === undefined)
            throw new Error("Data missing 'taskID' attribute");

          const gantt = task.ganttID
            ? { gantt: { ganttID: task.ganttID } }
            : {};

          deletedTasks.push({
            taskID: task.taskID,
            gantt,
          });
          break;

        case 'Updated':
          if (task.taskID === undefined)
            throw new Error("Data missing 'taskID' attribute");

          updatedTasks.push(task);

        default:
          throw new Error('Unknown error');
      }
    }

    await Promise.all([
      // this.taskDAO.bulkCreateTaskRecords(createdTasks),
      // this.taskDAO.bulkUpdateTaskRecords(updatedTasks),
      // this.taskDAO.bulkDeleteTaskRecords(deletedTasks),
    ]).then((res) => res);

    return await this.ganttDAO.getGanttWithTasks({ ganttID: data.ganttID });
  }
}
