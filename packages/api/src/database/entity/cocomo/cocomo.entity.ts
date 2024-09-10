import ProjectEntity from '@entities/project/project.entity';
import { CocomoMode } from 'cocogantt-shared';
import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';

@Entity('cocomo')
export default class CocomoEntity {
  @PrimaryGeneratedColumn()
  cocomoID: number;

  @Column({ type: 'simple-enum', enum: CocomoMode })
  mode: CocomoMode;

  @Column({ type: 'int' })
  kloc: number;

  @OneToOne(() => ProjectEntity, (referencedEntity) => referencedEntity.cocomo)
  project: ProjectEntity;
}
