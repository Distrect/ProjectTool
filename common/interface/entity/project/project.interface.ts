import { IGantEntity } from 'common/interface/entity/gantt';
import { ITeamMemberEntity } from 'common/interface/entity/teamMember';
import { ITimeStamp } from 'common/tools';

export interface IProjectRelations {
  functionPoint: null;
  cocomo: null;
  teamMembers: ITeamMemberEntity[];
  gantt: IGantEntity;
}

export interface IProjectBase {
  projectID: number;
  projectName: string;
}

export interface IProjectEntity
  extends IProjectBase,
    IProjectRelations,
    ITimeStamp {}
