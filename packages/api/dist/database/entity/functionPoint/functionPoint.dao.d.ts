import { UniqueFunctionPointArgs } from './functionPoint.interface';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import { Repository } from 'typeorm';
import { ICreateFunctionPointDATA, IUpdateFunctionPointDATA } from '@entities/functionPoint/functionPoint.interface';
import { UniqueEntityArgs } from '@entities/project/project.interface';
export default class FunctionPointDAO {
    private functionPointRepository;
    constructor(functionPointRepository: Repository<FunctionPointEntity>);
    getFunctionPointRecord(args: UniqueEntityArgs<UniqueFunctionPointArgs>): Promise<FunctionPointEntity>;
    createFunctionPointRecord({ projectID, ...rest }: ICreateFunctionPointDATA): Promise<FunctionPointEntity>;
    updateFunctionpointRecord(functionPointID: number, data: IUpdateFunctionPointDATA): Promise<{
        functionPointID: number;
        attributes?: import("cocogantt-shared").IFunctionPointAttributes;
        caf?: import("cocogantt-shared").ICAF;
        project?: {
            projectID: number;
        };
    } & FunctionPointEntity>;
    deleteFunctionPointRecord(functionPointID: number): Promise<void>;
}
