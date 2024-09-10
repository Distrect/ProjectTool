"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const project_entity_module_1 = require("../../database/entity/project/project.entity.module");
const document_feature_service_1 = require("./document.feature.service");
const common_1 = require("@nestjs/common");
let DocumentFeatureModule = class DocumentFeatureModule {
};
DocumentFeatureModule = __decorate([
    (0, common_1.Module)({
        imports: [project_entity_module_1.default],
        providers: [document_feature_service_1.default],
        exports: [document_feature_service_1.default],
    })
], DocumentFeatureModule);
exports.default = DocumentFeatureModule;
//# sourceMappingURL=document.feature.module.js.map