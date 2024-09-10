import ProjectEntityModule from '@entities/project/project.entity.module';
import DocumentFeatureService from '@featureModules/document/document.feature.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [ProjectEntityModule],
  providers: [DocumentFeatureService],
  exports: [DocumentFeatureService],
})
export default class DocumentFeatureModule {}
