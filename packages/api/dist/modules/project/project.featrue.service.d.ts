import ProjectDAO from '@entities/project/project.dao';
import { ICreateProjectArgs } from '@entities/project/project.interface';
export default class ProjectFeatureService {
    private projectDAO;
    constructor(projectDAO: ProjectDAO);
    createProject(data: ICreateProjectArgs): Promise<import("../../database/entity/project/project.entity").default>;
    getProject(projectID: number): Promise<import("../../database/entity/project/project.entity").default>;
    getAllProjects(): Promise<import("../../database/entity/project/project.entity").default[]>;
    updateProject(projectID: number, data: ICreateProjectArgs): Promise<import("../../database/entity/project/project.entity").default & ICreateProjectArgs>;
    deleteProject(projectID: number): Promise<void>;
}
