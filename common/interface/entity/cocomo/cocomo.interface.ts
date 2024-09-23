import { IProjectEntity } from '@common/interface';
import { ITimeStamp } from '@common/tools';

export interface ICOCOMOValues {
  a: [number, number];
  b: [number, number];
  c: number;
  d: number;
}

export interface ICOCOMOTable {
  organic: ICOCOMOValues;
  semidetached: ICOCOMOValues;
  embedded: ICOCOMOValues;
}

export interface ICocomoRelations {
  project: IProjectEntity;
}

export enum CocomoMode {
  ORGANIC = 'Organic',
  SEMIDETACHED = 'Semi-detached',
  EMBEDDED = 'Embedded',
}

export interface ICocomoBase {
  cocomoID: number;
  mode: CocomoMode;
  kloc: number;
}

export interface IEffortAdjustmentFactor {
  attribute: string;
  veryLow: number | null;
  low: number | null;
  nominal: 1;
  high: number;
  veryHigh: number | null;
  extraHigh: number | null;
}

export interface ILOC {
  language: string;
  avarage: number;
  median: number;
  low: number;
  high: number;
}

export interface ICocomoEntity
  extends ICocomoBase,
    ICocomoRelations,
    ITimeStamp {}
