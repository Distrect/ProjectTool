import { Module } from '@nestjs/common';
import FunctionPointEntityModule from '@entities/functionPoint/functionPonint.entity.module';
import FunctionPointFeatureService from '@featureModules/functionPoint/functionPoint.feature.service';

@Module({
  imports: [FunctionPointEntityModule],
  providers: [FunctionPointFeatureService],
  exports: [FunctionPointFeatureService],
})
export default class FunctionPointFeatureModule {}
