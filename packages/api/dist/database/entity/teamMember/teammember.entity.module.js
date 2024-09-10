"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const teamMember_dao_1 = require("./teamMember.dao");
const teamMember_entity_1 = require("./teamMember.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
let TeamMemberEntityModule = class TeamMemberEntityModule {
};
TeamMemberEntityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([teamMember_entity_1.default])],
        providers: [teamMember_dao_1.default],
        exports: [teamMember_dao_1.default],
    })
], TeamMemberEntityModule);
exports.default = TeamMemberEntityModule;
//# sourceMappingURL=teammember.entity.module.js.map