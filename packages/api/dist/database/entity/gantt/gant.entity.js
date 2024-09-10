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
const project_entity_1 = require("../project/project.entity");
const task_entity_1 = require("../task/task.entity");
const typeorm_1 = require("typeorm");
let GanttEntity = class GanttEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GanttEntity.prototype, "ganttID", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => task_entity_1.default, (taskEntity) => taskEntity.gantt),
    __metadata("design:type", Array)
], GanttEntity.prototype, "tasks", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_entity_1.default, (projectEntity) => projectEntity.gantt),
    __metadata("design:type", project_entity_1.default)
], GanttEntity.prototype, "project", void 0);
GanttEntity = __decorate([
    (0, typeorm_1.Entity)('gantt')
], GanttEntity);
exports.default = GanttEntity;
//# sourceMappingURL=gant.entity.js.map