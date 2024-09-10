import { Module } from '@nestjs/common';

import GanttFeatureModule from '@featureModules/gantt/gantt.feature.module';
import ProjectFeatureModule from '@featureModules/project/project.feature.module';
import FunctionPointFeatureModule from '@featureModules/functionPoint/functionPoint.feature.module';
import CocomoFeatureModule from '@featureModules/cocomo/cocomo.feature.module';
import TeamMemberFeatureModule from '@featureModules/teamMember/teamMember.feature.module';
import DocumentFeatureModule from '@featureModules/document/document.feature.module';

const appFeatureModules = [
  FunctionPointFeatureModule,
  CocomoFeatureModule,
  TeamMemberFeatureModule,
  GanttFeatureModule,
  ProjectFeatureModule,
  DocumentFeatureModule,
];

@Module({
  imports: appFeatureModules,
})
export default class AppFeatureModule {}
