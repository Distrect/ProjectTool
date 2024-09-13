import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import type { ITimeStamp } from '@common/tools';
import { list } from '@common/tools';
let z: ITimeStamp = { createdAt: new Date() };

console.log('Hellow', list);

export async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  return appContext;
}
