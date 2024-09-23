import { ProjectDAO } from '@entities/project/project.dao';
import { ProjectEntity } from '@entities/project/project.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity])],
  providers: [ProjectDAO],
  exports: [ProjectDAO],
})
export class ProjectEntityModule {}
