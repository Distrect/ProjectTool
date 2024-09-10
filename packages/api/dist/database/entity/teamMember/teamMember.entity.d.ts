import ProjectEntity from '@entities/project/project.entity';
export default class TeamMemberEntity {
    teamMemberID: number;
    memeberName: string;
    title: string;
    project: ProjectEntity;
}
