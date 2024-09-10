import { IProjectArgs } from '@entities/project/project.interface';
import TeamMemberDAO from '@entities/teamMember/teamMember.dao';
import { ICreateTeamMemberDATA, IGetTeamMemberDATA, IUpdateTeamMemberDATA } from '@entities/teamMember/teamMember.interface';
export default class TeamMemberFeatureService {
    private teamMemberDAO;
    constructor(teamMemberDAO: TeamMemberDAO);
    getTeamMembers(args: IProjectArgs): Promise<import("../../database/entity/teamMember/teamMember.entity").default[]>;
    getTeamMember(args: IGetTeamMemberDATA): Promise<import("../../database/entity/teamMember/teamMember.entity").default>;
    createTeamMember(data: ICreateTeamMemberDATA): Promise<ICreateTeamMemberDATA & import("../../database/entity/teamMember/teamMember.entity").default>;
    deleteTeamMember(args: IGetTeamMemberDATA): Promise<void>;
    updateTeamMember(args: IGetTeamMemberDATA, data: IUpdateTeamMemberDATA): Promise<import("../../database/entity/teamMember/teamMember.entity").default & Partial<Omit<import("../../database/entity/teamMember/teamMember.entity").default, "teamMemberID" | "title">>>;
}
