import GanttEntity from '@entities/gantt/gant.entity';
import { PredecessorType } from 'cocogantt-shared';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('taks')
export default class TaskEntity {
  @PrimaryGeneratedColumn()
  taskID: number;

  @Column({ type: 'text' })
  taskName: string;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column({ type: 'int' })
  duration: number;

  @Column({ type: 'int' })
  progress: number;

  @Column({ type: 'int', nullable: true })
  optimisticTime?: number | null;

  @Column({ type: 'int', nullable: true })
  pessimisticTime?: number | null;

  @Column({ type: 'int', nullable: true })
  mostLikelyTime?: number | null;

  @Column({ type: 'int', nullable: true })
  successProbability?: number | null;

  @Column({ type: 'int', nullable: true })
  crashDay?: number | null;

  @Column({ type: 'int', nullable: true })
  crashCost?: number | null;

  @Column({ type: 'int', nullable: true })
  normalCost?: number | null;

  @Column({ type: 'int', nullable: true })
  parentID?: number | null;

  @Column({ type: 'int' })
  level: number;

  @Column({ type: 'simple-enum', enum: PredecessorType })
  index: PredecessorType;

  @ManyToOne(() => GanttEntity, (ganttEntity) => ganttEntity.tasks)
  gantt: GanttEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
