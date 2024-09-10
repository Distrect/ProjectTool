import CocomoEntity from '@entities/cocomo/cocomo.entity';
import FunctionPointEntity from '@entities/functionPoint/functionPoint.entity';
import GanttEntity from '@entities/gantt/gant.entity';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
export default class ProjectEntity {
    projectID: number;
    projectName: string;
    createdAt: Date;
    updatedAt: Date;
    functionPoint: FunctionPointEntity | null;
    cocomo: CocomoEntity | null;
    teamMembers: TeamMemberEntity[] | null;
    gantt: GanttEntity | null;
}
