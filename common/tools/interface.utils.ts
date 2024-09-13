export type CreatedAtAttribute = {
  createdAt: Date;
};

export type UpdatedAtAttribute = {
  updatedAt: Date;
};

export interface ITimeStamp extends CreatedAtAttribute, UpdatedAtAttribute {}
