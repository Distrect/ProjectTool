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
const teamMember_dao_1 = require("../../database/entity/teamMember/teamMember.dao");
const common_1 = require("@nestjs/common");
let TeamMemberFeatureService = class TeamMemberFeatureService {
    constructor(teamMemberDAO) {
        this.teamMemberDAO = teamMemberDAO;
    }
    async getTeamMembers(args) {
        return await this.teamMemberDAO.getAllTeamMembers(args);
    }
    async getTeamMember(args) {
        return await this.teamMemberDAO.getTeamMemberRecord(args);
    }
    async createTeamMember(data) {
        return await this.teamMemberDAO.createTeamMemberRecord(data);
    }
    async deleteTeamMember(args) {
        await this.teamMemberDAO.deleteTeamMemberRecord(args);
    }
    async updateTeamMember(args, data) {
        return await this.teamMemberDAO.updateTeamMemberRecord(args, data);
    }
};
TeamMemberFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teamMember_dao_1.default])
], TeamMemberFeatureService);
exports.default = TeamMemberFeatureService;
//# sourceMappingURL=teamMember.feature.service.js.map