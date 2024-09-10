import { IFunctionPointAttributes } from '../interfaces/project/functionPoint.interface';

export const functionPointAttributes: IFunctionPointAttributes = {
  'User Input': {
    low: 3,
    avarage: 4,
    high: 6,
  },
  'User Output': {
    low: 4,
    avarage: 5,
    high: 7,
  },
  'User Query': {
    low: 3,
    avarage: 4,
    high: 6,
  },
  'Internal Files': {
    low: 7,
    avarage: 10,
    high: 15,
  },
  'External Interfaces': {
    low: 5,
    avarage: 7,
    high: 10,
  },
} as const;
