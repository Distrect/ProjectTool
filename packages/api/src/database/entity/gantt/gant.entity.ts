import { ProjectEntity } from '@entities/project/project.entity';
import { Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IGantEntity, ITaskEntity } from '@common/index';

@Entity('gantt')
export class GanttEntity implements IGantEntity {
  @PrimaryGeneratedColumn()
  ganttID!: number;

  // @OneToMany(() => TaskEntity, (taskEntity) => taskEntity.gantt)
  tasks!: ITaskEntity[];

  @OneToOne(() => ProjectEntity, (projectEntity) => projectEntity.gantt)
  project!: ProjectEntity;

  projectStartDate?: Date;
  projectEndDate?: Date;
  createdAt!: Date;
  updatedAt!: Date;
}
