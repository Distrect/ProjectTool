import FunctionPointDAO from '@entities/functionPoint/functionPoint.dao';
import { ICreateFunctionPointDATA, IUpdateFunctionPointDATA } from '@entities/functionPoint/functionPoint.interface';
export default class FunctionPointFeatureService {
    private functionPointDAO;
    constructor(functionPointDAO: FunctionPointDAO);
    createFunctionPoint(data: ICreateFunctionPointDATA): Promise<import("../../database/entity/functionPoint/functionPoint.entity").default>;
    getFunctionPoint(functionPointID: number): Promise<import("../../database/entity/functionPoint/functionPoint.entity").default>;
    updateFunctionPoint(functionPointID: number, data: IUpdateFunctionPointDATA): Promise<{
        functionPointID: number;
        attributes?: import("cocogantt-shared").IFunctionPointAttributes;
        caf?: import("cocogantt-shared").ICAF;
        project?: {
            projectID: number;
        };
    } & import("../../database/entity/functionPoint/functionPoint.entity").default>;
    deleteFunctionPoint(functionPointID: number): Promise<void>;
}
