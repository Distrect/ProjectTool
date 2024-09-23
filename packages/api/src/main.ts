export { INestApplicationContext } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export * from './modules';
export * from './database';
export * from './shared';

export async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  return appContext;
}
