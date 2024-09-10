import { UniqueFunctionPointArgs } from './functionPoint.interface';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import {
  ICreateFunctionPointDATA,
  IUpdateFunctionPointDATA,
} from '@entities/functionPoint/functionPoint.interface';
import { UniqueEntityArgs } from '@entities/project/project.interface';

@Injectable()
export default class FunctionPointDAO {
  constructor(
    @InjectRepository(FunctionPointEntity)
    private functionPointRepository: Repository<FunctionPointEntity>,
  ) {}

  public async getFunctionPointRecord(
    args: UniqueEntityArgs<UniqueFunctionPointArgs>,
  ) {
    const functionPointEntity = await this.functionPointRepository.findOne({
      where: args,
    });

    if (functionPointEntity === null)
      throw new RecordNotFoundError(
        `FunctionPoint record with id ${1} is not found`,
      );

    return functionPointEntity;
  }

  public async createFunctionPointRecord({
    projectID,
    ...rest
  }: ICreateFunctionPointDATA) {
    const newFunctionPointEntity = await this.functionPointRepository.save({
      project: {
        projectID,
      },
      ...rest,
    });

    return newFunctionPointEntity as FunctionPointEntity;
  }

  public async updateFunctionpointRecord(
    functionPointID: number,
    data: IUpdateFunctionPointDATA,
  ) {
    await this.getFunctionPointRecord({ functionPointID });

    const updatedRecord = await this.functionPointRepository.save({
      ...data,
      functionPointID,
    });

    return updatedRecord;
  }

  public async deleteFunctionPointRecord(functionPointID: number) {
    await this.getFunctionPointRecord({ functionPointID });
    await this.functionPointRepository.delete(functionPointID);
  }
}
