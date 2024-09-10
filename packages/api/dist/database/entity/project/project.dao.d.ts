import ProjectEntity from '@entities/project/project.entity';
import { ICreateProjectArgs } from '@entities/project/project.interface';
import { Repository } from 'typeorm';
export default class ProjectDAO {
    private projectRepository;
    constructor(projectRepository: Repository<ProjectEntity>);
    getAllProjects(): Promise<ProjectEntity[]>;
    getProject(projectID: number): Promise<ProjectEntity>;
    updateProject(projectID: number, data: ICreateProjectArgs): Promise<ProjectEntity & ICreateProjectArgs>;
    createProjectRecord(data: ICreateProjectArgs): Promise<ProjectEntity>;
    deleteProject(projectID: number): Promise<void>;
}
