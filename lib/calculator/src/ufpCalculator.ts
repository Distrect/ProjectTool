import type {
  ICAF,
  IFunctionPointValues,
  FPValuesKey,
  UFPFunctions,
} from '@common/interface';
import { FUNCTION_POINT_ATTRIBUTES } from '@common/constants';

export const calculateDataIntegrityValues = (data: ICAF): number =>
  Object.values(data).reduce((acc, val) => acc + val, 0);

export const calculateFunction = (
  func: UFPFunctions,
  data: IFunctionPointValues
): number =>
  Object.entries(data).reduce(
    (acc, [dataKey, val]) =>
      acc + val * FUNCTION_POINT_ATTRIBUTES[func][dataKey as FPValuesKey],
    0
  );
