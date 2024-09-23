import { IProjectEntity } from '@common/interface';
import { ITimeStamp } from '@common/tools';

export interface ITeamMemberRelations {
  project: IProjectEntity;
}

export interface ITeamMemberBase {
  teamMemberID: number;
  memeberName: string;
  title: string;
}

export interface ITeamMemberEntity
  extends ITeamMemberBase,
    ITeamMemberRelations,
    ITimeStamp {}
