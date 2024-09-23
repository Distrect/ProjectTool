import type {
  IFunctionPointEntity,
  IFunctionPointAttributes,
  ICAF,
} from '@common/index';
import { ProjectEntity } from '@entities/project/project.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('functionPoint')
export class FunctionPointEntity implements IFunctionPointEntity {
  @PrimaryGeneratedColumn()
  functionPointID!: number;

  @Column({ type: 'simple-json' })
  attributes!: IFunctionPointAttributes;

  @Column({ type: 'simple-json' })
  caf!: ICAF;

  @OneToOne(() => ProjectEntity)
  project!: ProjectEntity;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  public toJSON() {
    return {
      functionPointID: this.functionPointID,
      attributes: this.attributes,
      caf: this.caf,
    };
  }
}
