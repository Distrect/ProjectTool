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
const typeorm_1 = require("typeorm");
let FunctionPointEntity = class FunctionPointEntity {
    toJSON() {
        return {
            functionPointID: this.functionPointID,
            attributes: this.attributes,
            caf: this.caf,
        };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FunctionPointEntity.prototype, "functionPointID", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json' }),
    __metadata("design:type", Object)
], FunctionPointEntity.prototype, "attributes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'simple-json' }),
    __metadata("design:type", Object)
], FunctionPointEntity.prototype, "caf", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => project_entity_1.default),
    __metadata("design:type", project_entity_1.default)
], FunctionPointEntity.prototype, "project", void 0);
FunctionPointEntity = __decorate([
    (0, typeorm_1.Entity)('functionPoint')
], FunctionPointEntity);
exports.default = FunctionPointEntity;
//# sourceMappingURL=functionPoint.entity.js.map