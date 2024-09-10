import { Module } from '@nestjs/common';
import GanttFeatureService from './gantt.feature.service';
import GanttFeatureController from './gantt.feature.controller';
import GanttEntityModule from '@entities/gantt/gantt.entity.module';
import TaskEntityModule from '@entities/task/task.entity.module';

@Module({
  imports: [GanttEntityModule, TaskEntityModule],
  providers: [GanttFeatureService],
  controllers: [GanttFeatureController],
})
export default class GanttFeatureModule {}
