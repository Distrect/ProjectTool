"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cocomo_feature_service_1 = require("../cocomo/cocomo.feature.service");
const cocomo_entity_module_1 = require("../../database/entity/cocomo/cocomo.entity.module");
let CocomoFeatureModule = class CocomoFeatureModule {
};
CocomoFeatureModule = __decorate([
    (0, common_1.Module)({
        imports: [cocomo_entity_module_1.default],
        providers: [cocomo_feature_service_1.default],
        exports: [cocomo_feature_service_1.default],
    })
], CocomoFeatureModule);
exports.default = CocomoFeatureModule;
//# sourceMappingURL=cocomo.feature.module.js.map