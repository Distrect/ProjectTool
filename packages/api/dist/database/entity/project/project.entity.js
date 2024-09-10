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
const cocomo_entity_1 = require("../cocomo/cocomo.entity");
const functionPoint_entity_1 = require("../functionPoint/functionPoint.entity");
const gant_entity_1 = require("../gantt/gant.entity");
const teamMember_entity_1 = require("../teamMember/teamMember.entity");
const typeorm_1 = require("typeorm");
let ProjectEntity = class ProjectEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProjectEntity.prototype, "projectID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text' }),
    __metadata("design:type", String)
], ProjectEntity.prototype, "projectName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], ProjectEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => functionPoint_entity_1.default, { cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: 'functionPointFID',
        referencedColumnName: 'functionPointID',
    }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "functionPoint", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cocomo_entity_1.default, (referencedEntity) => referencedEntity.project, { cascade: true }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "cocomo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => teamMember_entity_1.default, (teamMemberEntity) => teamMemberEntity.project, { cascade: true }),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "teamMembers", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => gant_entity_1.default, (referencedEntity) => referencedEntity.project, {
        cascade: true,
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], ProjectEntity.prototype, "gantt", void 0);
ProjectEntity = __decorate([
    (0, typeorm_1.Entity)('project')
], ProjectEntity);
exports.default = ProjectEntity;
//# sourceMappingURL=project.entity.js.map