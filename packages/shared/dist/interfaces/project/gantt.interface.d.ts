export interface IPertData {
    optimisticTime: string;
    pessimisticTime: string;
    mostLikely: string;
}
export type IResourceModel = {
    resourceID: number;
    resourceName: string;
};
export interface IDataMapping extends IPertData {
    uuid: number;
    taskName: string;
    startDate: Date;
    endDate: Date;
    duration: number;
    progress: number;
    predecessor: any;
    durationUnit: any;
    parentID: number;
    milestone: any;
    isManual: boolean;
    resource: IResourceModel;
}
