import { ProjectEntity } from '@entities/project/project.entity';
import { ICreateProjectArgs } from '@entities/project/project.interface';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RecordNotFoundError } from 'src/shared/errors';
import { Repository } from 'typeorm';

@Injectable()
export class ProjectDAO {
  constructor(
    @InjectRepository(ProjectEntity)
    private projectRepository: Repository<ProjectEntity>,
  ) {}

  public async getAllProjects() {
    return await this.projectRepository.find();
  }

  public async getProject(projectID: number) {
    const project = await this.projectRepository.findOne({
      where: { projectID },
      relations: {
        cocomo: true,
        functionPoint: true,
        gantt: true,
        teamMembers: true,
      },
    });

    if (project === null)
      throw new RecordNotFoundError(
        `Project record with id ${projectID} is not found`,
      );

    return project;
  }

  public async updateProject(projectID: number, data: ICreateProjectArgs) {
    const project = await this.getProject(projectID);
    const updatedProject = await this.projectRepository.save(
      Object.assign(project, data),
    );

    return updatedProject;
  }

  public async createProjectRecord(data: ICreateProjectArgs) {
    const newProjectRecord = this.projectRepository.create(data);
    return await this.projectRepository.save(newProjectRecord);
  }

  public async deleteProject(projectID: number) {
    await this.projectRepository.delete(projectID);
  }
}
