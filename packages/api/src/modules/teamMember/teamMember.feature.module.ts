import { Module } from '@nestjs/common';
import { TeamMemberFeatureService } from '../teamMember/teamMember.feature.service';
import { TeamMemberEntityModule } from '@entities/teamMember/teammember.entity.module';

@Module({
  imports: [TeamMemberEntityModule],
  providers: [TeamMemberFeatureService],
  exports: [TeamMemberFeatureService],
})
export class TeamMemberFeatureModule {}
