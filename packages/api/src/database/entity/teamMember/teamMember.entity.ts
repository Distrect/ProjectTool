import { ITeamMemberEntity } from '@common/index';
import { ProjectEntity } from '@entities/project/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('teamMember')
export class TeamMemberEntity implements ITeamMemberEntity {
  @PrimaryGeneratedColumn()
  teamMemberID!: number;

  @Column({ type: 'text' })
  memeberName!: string;

  @Column({ type: 'text' })
  title!: string;

  @ManyToOne(() => ProjectEntity, (projectEntity) => projectEntity.teamMembers)
  project!: ProjectEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
