import { ICAF, IFunctionPointAttributes } from 'cocogantt-shared';
export interface UniqueFunctionPointArgs {
    functionPointID: number;
}
export interface ICreateFunctionPointDATA {
    attributes: IFunctionPointAttributes;
    caf: ICAF;
    projectID: number;
}
export interface IUpdateFunctionPointDATA {
    attributes?: IFunctionPointAttributes;
    caf?: ICAF;
    project?: {
        projectID: number;
    };
}
