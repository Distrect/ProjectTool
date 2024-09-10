import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CocomoEntityModule from '@entities/cocomo/cocomo.entity.module';
import FunctionPointEntityModule from '@entities/functionPoint/functionPonint.entity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'src/schema/cocogantt.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    FunctionPointEntityModule,
    CocomoEntityModule,
  ],
})
export default class DatabaseModule {}
