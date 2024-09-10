import { functionPointAttributes } from '../constant';
import {
  FPValuesKey,
  ICAF,
  IFunctionPointValues,
  UFPFunctions,
} from '../interfaces';

export const calculateDataIntegrityValues = (data: ICAF): number =>
  Object.values(data).reduce((acc, val) => acc + val, 0);

export const calculateFunction = (
  func: UFPFunctions,
  data: IFunctionPointValues
) => {
  const constant = functionPointAttributes[func];

  return Object.entries(data).reduce(
    (acc, [dataKey, val]) => acc + val * constant[dataKey as FPValuesKey],
    0
  );
};
