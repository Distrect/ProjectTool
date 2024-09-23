import { Module } from '@nestjs/common';
import { CocomoFeatureService } from '../cocomo/cocomo.feature.service';
import { CocomoEntityModule } from '@entities/cocomo/cocomo.entity.module';

@Module({
  imports: [CocomoEntityModule],
  providers: [CocomoFeatureService],
  exports: [CocomoFeatureService],
})
export class CocomoFeatureModule {}
