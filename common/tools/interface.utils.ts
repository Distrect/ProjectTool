export type CreatedAtAttribute = {
  createdAt: Date;
};

export type UpdatedAtAttribute = {
  createdAt: Date;
};

export interface ITimeStamp extends CreatedAtAttribute, UpdatedAtAttribute {}
