import ProjectEntity from '@entities/project/project.entity';
import { ICAF, IFunctionPoint, IFunctionPointAttributes } from 'cocogantt-shared';
export default class FunctionPointEntity implements IFunctionPoint {
    functionPointID: number;
    attributes: IFunctionPointAttributes;
    caf: ICAF;
    project: ProjectEntity;
    toJSON(): {
        functionPointID: number;
        attributes: IFunctionPointAttributes;
        caf: ICAF;
    };
}
