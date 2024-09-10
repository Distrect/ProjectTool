"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_entity_1 = require("./project.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const errors_1 = require("../../../shared/errors");
const typeorm_2 = require("typeorm");
let ProjectDAO = class ProjectDAO {
    constructor(projectRepository) {
        this.projectRepository = projectRepository;
    }
    async getAllProjects() {
        return await this.projectRepository.find();
    }
    async getProject(projectID) {
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
            throw new errors_1.RecordNotFoundError(`Project record with id ${projectID} is not found`);
        return project;
    }
    async updateProject(projectID, data) {
        const project = await this.getProject(projectID);
        const updatedProject = await this.projectRepository.save(Object.assign(project, data));
        return updatedProject;
    }
    async createProjectRecord(data) {
        const newProjectRecord = this.projectRepository.create(data);
        return await this.projectRepository.save(newProjectRecord);
    }
    async deleteProject(projectID) {
        await this.projectRepository.delete(projectID);
    }
};
ProjectDAO = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(project_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProjectDAO);
exports.default = ProjectDAO;
//# sourceMappingURL=project.dao.js.map