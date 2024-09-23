import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { IProjectEntity } from '@common/index';
import { CocomoEntity } from '@entities/cocomo/cocomo.entity';
import { FunctionPointEntity } from '@entities/functionPoint/functionPoint.entity';
import { GanttEntity } from '@entities/gantt/gant.entity';
import { TeamMemberEntity } from '@entities/teamMember/teamMember.entity';

@Entity('project')
export class ProjectEntity implements IProjectEntity {
  @PrimaryGeneratedColumn()
  projectID!: number;

  @Column({ type: 'text' })
  projectName!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToOne(() => FunctionPointEntity, { cascade: true })
  @JoinColumn({
    name: 'functionPointFID',
    referencedColumnName: 'functionPointID',
  })
  functionPoint!: FunctionPointEntity | null;

  @OneToOne(
    () => CocomoEntity,
    (referencedEntity) => referencedEntity.project,
    { cascade: true },
  )
  @JoinColumn()
  cocomo!: CocomoEntity | null;

  @OneToMany(
    () => TeamMemberEntity,
    (referencedEntity) => referencedEntity.project,
    { cascade: true },
  )
  teamMembers!: TeamMemberEntity[] | null;

  @OneToOne(() => GanttEntity, (referencedEntity) => referencedEntity.project, {
    cascade: true,
  })
  @JoinColumn()
  gantt!: GanttEntity | null;
}
