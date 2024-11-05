import { IProjectEntity } from '@common/interface';
import { ITimeStamp } from '@common/tools';

export type CocomoTableKeys = 'organic' | 'semidetached' | 'embedded';

export type EafKeys =
  | 'RELY'
  | 'DATA'
  | 'CPLX'
  | 'TIME'
  | 'STOR'
  | 'VIRT'
  | 'TURN'
  | 'ACAP'
  | 'APEX'
  | 'PCAP'
  | 'VEXP'
  | 'LEXP'
  | 'AEXP'
  | 'TOOL'
  | 'SCED';

export type EafValueKeys =
  | 'veryLow'
  | 'low'
  | 'nominal'
  | 'high'
  | 'veryHigh'
  | 'extraHigh';

export interface IEafFunctionData {
  function: EafKeys;
  key: EafValueKeys;
  value: number;
}

export interface ICOCOMOValues {
  a: number;
  b: number;
  c: number;
  d: number;
}

export type ICOCOMOTable = {
  [key in CocomoTableKeys]: ICOCOMOValues;
};

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
  short: EafKeys;
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
