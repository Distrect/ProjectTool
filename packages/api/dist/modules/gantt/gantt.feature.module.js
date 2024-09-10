"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const gantt_feature_service_1 = require("./gantt.feature.service");
const gantt_feature_controller_1 = require("./gantt.feature.controller");
const gantt_entity_module_1 = require("../../database/entity/gantt/gantt.entity.module");
const task_entity_module_1 = require("../../database/entity/task/task.entity.module");
let GanttFeatureModule = class GanttFeatureModule {
};
GanttFeatureModule = __decorate([
    (0, common_1.Module)({
        imports: [gantt_entity_module_1.default, task_entity_module_1.default],
        providers: [gantt_feature_service_1.default],
        controllers: [gantt_feature_controller_1.default],
    })
], GanttFeatureModule);
exports.default = GanttFeatureModule;
//# sourceMappingURL=gantt.feature.module.js.map