import { Module } from '@nestjs/common';
import { ProjectFeatureService } from './project.feature.service';
import { ProjectEntityModule } from '@entities/project/project.entity.module';

@Module({
  imports: [ProjectEntityModule],
  providers: [ProjectFeatureService],
  exports: [ProjectFeatureService],
})
export class ProjectFeatureModule {}
