import { Injectable } from '@nestjs/common';
import ProjectDAO from '@entities/project/project.dao';
import { ICreateProjectArgs } from '@entities/project/project.interface';

@Injectable()
export default class ProjectFeatureService {
  constructor(private projectDAO: ProjectDAO) {}

  public async createProject(data: ICreateProjectArgs) {
    return await this.projectDAO.createProjectRecord(data);
  }

  public async getProject(projectID: number) {
    return await this.projectDAO.getProject(projectID);
  }

  public async getAllProjects() {
    return await this.projectDAO.getAllProjects();
  }

  public async updateProject(projectID: number, data: ICreateProjectArgs) {
    return await this.projectDAO.updateProject(projectID, data);
  }

  public async deleteProject(projectID: number) {
    return await this.projectDAO.deleteProject(projectID);
  }
}
