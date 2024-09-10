"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const gantt_feature_module_1 = require("./gantt/gantt.feature.module");
const project_feature_module_1 = require("./project/project.feature.module");
const functionPoint_feature_module_1 = require("./functionPoint/functionPoint.feature.module");
const cocomo_feature_module_1 = require("./cocomo/cocomo.feature.module");
const teamMember_feature_module_1 = require("./teamMember/teamMember.feature.module");
const document_feature_module_1 = require("./document/document.feature.module");
const appFeatureModules = [
    functionPoint_feature_module_1.default,
    cocomo_feature_module_1.default,
    teamMember_feature_module_1.default,
    gantt_feature_module_1.default,
    project_feature_module_1.default,
    document_feature_module_1.default,
];
let AppFeatureModule = class AppFeatureModule {
};
AppFeatureModule = __decorate([
    (0, common_1.Module)({
        imports: appFeatureModules,
    })
], AppFeatureModule);
exports.default = AppFeatureModule;
//# sourceMappingURL=app.feature.module.js.map