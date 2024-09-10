import ProjectEntity from '@entities/project/project.entity';
import TaskEntity from '@entities/task/task.entity';
export default class GanttEntity {
    ganttID: number;
    tasks: TaskEntity[];
    project: ProjectEntity;
}
