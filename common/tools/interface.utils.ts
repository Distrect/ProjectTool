export type CreatedAtAttribute = {
  createdAt: Date;
};

export type UpdatedAtAttribute = {
  updatedAt: Date;
};

export interface ITimeStamp extends CreatedAtAttribute, UpdatedAtAttribute {}

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
