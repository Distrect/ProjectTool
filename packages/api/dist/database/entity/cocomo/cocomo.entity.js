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
const cocogantt_shared_1 = require("cocogantt-shared");
const typeorm_1 = require("typeorm");
let CocomoEntity = class CocomoEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CocomoEntity.prototype, "cocomoID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-enum', enum: cocogantt_shared_1.CocomoMode }),
    __metadata("design:type", String)
], CocomoEntity.prototype, "mode", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CocomoEntity.prototype, "kloc", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_entity_1.default, (referencedEntity) => referencedEntity.cocomo),
    __metadata("design:type", project_entity_1.default)
], CocomoEntity.prototype, "project", void 0);
CocomoEntity = __decorate([
    (0, typeorm_1.Entity)('cocomo')
], CocomoEntity);
exports.default = CocomoEntity;
//# sourceMappingURL=cocomo.entity.js.map