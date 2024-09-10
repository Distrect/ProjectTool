import { Repository } from 'typeorm';
import TeamMemberEntity from '@entities/teamMember/teamMember.entity';
import { ICreateTeamMemberDATA, IGetTeamMemberDATA, IUpdateTeamMemberDATA } from '@entities/teamMember/teamMember.interface';
import { IProjectArgs } from '@entities/project/project.interface';
export default class TeamMemberDAO {
    private teamMemberRepository;
    constructor(teamMemberRepository: Repository<TeamMemberEntity>);
    getAllTeamMembers({ projectID }: IProjectArgs): Promise<TeamMemberEntity[]>;
    createTeamMemberRecord(data: ICreateTeamMemberDATA): Promise<ICreateTeamMemberDATA & TeamMemberEntity>;
    getTeamMemberRecord(args: IGetTeamMemberDATA): Promise<TeamMemberEntity>;
    deleteTeamMemberRecord(args: IGetTeamMemberDATA): Promise<void>;
    updateTeamMemberRecord(args: IGetTeamMemberDATA, data: IUpdateTeamMemberDATA): Promise<TeamMemberEntity & Partial<Omit<TeamMemberEntity, "teamMemberID" | "title">>>;
}
