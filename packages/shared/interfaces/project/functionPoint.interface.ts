export interface IFunctionPoint {
  functionPointID: number;
  attributes: IFunctionPointAttributes;
  caf: ICAF;
}

export type UFPFunctions =
  | 'User Input'
  | 'User Output'
  | 'User Query'
  | 'Internal Files'
  | 'External Interfaces';

export type ArrUFPFunctions = [
  'User Input',
  'User Output',
  'User Query',
  'Internal Files',
  'External Interfaces',
];

export type FPValuesKey = 'low' | 'avarage' | 'high';

export type IFunctionPointValues = {
  [key in FPValuesKey]: number;
};

export type IFunctionPointAttributes = {
  [key in UFPFunctions]: IFunctionPointValues;
};

export type CafKey =
  | 'Data Communications'
  | 'Data Processing'
  | 'Distributed Processing'
  | 'Performance'
  | 'Security'
  | 'User Interfaces'
  | 'Reusability'
  | 'Ease of Installation'
  | 'Operational Ease'
  | 'Online Data Storage'
  | 'Online Transaction Volume'
  | 'Concurrent Users'
  | 'Includes Specialized Processing Features'
  | 'Internal Communication Complexity';

export type ICAF = {
  [key in CafKey]: number;
};
