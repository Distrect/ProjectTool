import { IFunctionPoint } from 'cocogantt-shared';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import DocumentFeatureService from '@featureModules/document/document.feature.service';
import { writeFileSync } from 'fs';

const fp: IFunctionPoint = {
  caf: {
    'Concurrent Users': 10,
    'Data Communications': 10,
    'Data Processing': 10,
    'Distributed Processing': 10,
    'Ease of Installation': 10,
    'Includes Specialized Processing Features': 10,
    'Internal Communication Complexity': 10,
    'Online Data Storage': 10,
    'Online Transaction Volume': 10,
    'Operational Ease': 10,
    'User Interfaces': 10,
    Performance: 10,
    Reusability: 10,
    Security: 10,
  },
  attributes: {
    'User Query': { low: 1, avarage: 2, high: 3 },
    'External Interfaces': { low: 1, avarage: 2, high: 3 },
    'User Input': { low: 1, avarage: 2, high: 3 },
    'User Output': { low: 1, avarage: 2, high: 3 },
    'Internal Files': { low: 1, avarage: 2, high: 3 },
  },
  functionPointID: 1,
};

export async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  return appContext;
}
