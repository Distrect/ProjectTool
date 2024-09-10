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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const project_dao_1 = require("../../database/entity/project/project.dao");
let ProjectFeatureService = class ProjectFeatureService {
    constructor(projectDAO) {
        this.projectDAO = projectDAO;
    }
    async createProject(data) {
        return await this.projectDAO.createProjectRecord(data);
    }
    async getProject(projectID) {
        return await this.projectDAO.getProject(projectID);
    }
    async getAllProjects() {
        return await this.projectDAO.getAllProjects();
    }
    async updateProject(projectID, data) {
        return await this.projectDAO.updateProject(projectID, data);
    }
    async deleteProject(projectID) {
        return await this.projectDAO.deleteProject(projectID);
    }
};
ProjectFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [project_dao_1.default])
], ProjectFeatureService);
exports.default = ProjectFeatureService;
//# sourceMappingURL=project.featrue.service.js.map