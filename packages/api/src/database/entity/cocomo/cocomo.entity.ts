import { ProjectEntity } from '@entities/project/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CocomoMode, ICocomoEntity } from '@common/index';

@Entity('cocomo')
export class CocomoEntity implements ICocomoEntity {
  @PrimaryGeneratedColumn()
  cocomoID!: number;

  @Column({ type: 'simple-enum', enum: CocomoMode })
  mode!: CocomoMode;

  @Column({ type: 'int' })
  kloc!: number;

  @OneToOne(() => ProjectEntity, (referencedEntity) => referencedEntity.cocomo)
  project!: ProjectEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}
