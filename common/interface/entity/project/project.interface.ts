import {
  IFunctionPointEntity,
  ITeamMemberEntity,
  ICocomoEntity,
  IGantEntity,
} from '@common/interface';
import { ITimeStamp } from '@common/tools';

export interface IProjectRelations {
  functionPoint: IFunctionPointEntity | null;
  cocomo: ICocomoEntity | null;
  teamMembers: ITeamMemberEntity[] | null;
  gantt: IGantEntity | null;
}

export interface IProjectBase {
  projectID: number;
  projectName: string;
}

export interface IProjectEntity extends IProjectBase, ITimeStamp {}
