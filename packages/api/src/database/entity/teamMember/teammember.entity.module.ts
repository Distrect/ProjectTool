import TeamMemberDAO from '@entities/teamMember/teamMember.dao';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([TeamMemberEntity])],
  providers: [TeamMemberDAO],
  exports: [TeamMemberDAO],
})
export default class TeamMemberEntityModule {}
