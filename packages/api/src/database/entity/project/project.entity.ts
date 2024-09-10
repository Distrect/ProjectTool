import CocomoEntity from '@entities/cocomo/cocomo.entity';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import GanttEntity from '@entities/gantt/gant.entity';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
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

@Entity('project')
export default class ProjectEntity {
  @PrimaryGeneratedColumn()
  projectID: number;

  @Column({ type: 'text' })
  projectName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => FunctionPointEntity, { cascade: true })
  @JoinColumn({
    name: 'functionPointFID',
    referencedColumnName: 'functionPointID',
  })
  functionPoint: FunctionPointEntity | null;

  @OneToOne(
    () => CocomoEntity,
    (referencedEntity) => referencedEntity.project,
    { cascade: true },
  )
  @JoinColumn()
  cocomo: CocomoEntity | null;

  @OneToMany(
    () => TeamMemberEntity,
    (teamMemberEntity) => teamMemberEntity.project,
    { cascade: true },
  )
  teamMembers: TeamMemberEntity[] | null;

  @OneToOne(() => GanttEntity, (referencedEntity) => referencedEntity.project, {
    cascade: true,
  })
  @JoinColumn()
  gantt: GanttEntity | null;
}
