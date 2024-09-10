import TaskEntity from '@entities/task/task.entity';
import { ICreateTaskDATA, IGetTaskDATA, IUpdateTaskDATA } from '@entities/task/task.interface';
import { FindManyOptions, Repository } from 'typeorm';
export default class TaskDAO {
    private taskRepository;
    constructor(taskRepository: Repository<TaskEntity>);
    getTaskRecord(args: IGetTaskDATA): Promise<TaskEntity>;
    getTaskRecords(args: FindManyOptions<TaskEntity>): Promise<TaskEntity[]>;
    bulkCreateTaskRecords(data: ICreateTaskDATA[]): Promise<(ICreateTaskDATA & TaskEntity)[]>;
    bulkUpdateTaskRecords(data: IUpdateTaskDATA[]): Promise<(IUpdateTaskDATA & TaskEntity)[]>;
    bulkDeleteTaskRecords(args: IGetTaskDATA[]): Promise<void>;
}
