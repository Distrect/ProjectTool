export interface IPertData {
  optimisticTime: string;
  pessimisticTime: string;
  mostLikely: string;
}

export type IResourceModel = {
  resourceID: number;
  resourceName: string;
  // unit: number;
};
export interface IDataMapping extends Partial<IPertData> {
  uuid: number;
  taskName: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  progress: number;
  predecessor?: any | null;
  durationUnit?: any;
  parentID?: number;
  isManual?: boolean;
  resource?: IResourceModel;
}
