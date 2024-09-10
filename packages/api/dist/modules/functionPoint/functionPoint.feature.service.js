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
const common_1 = require("@nestjs/common");
const functionPoint_dao_1 = require("../../database/entity/functionPoint/functionPoint.dao");
let FunctionPointFeatureService = class FunctionPointFeatureService {
    constructor(functionPointDAO) {
        this.functionPointDAO = functionPointDAO;
    }
    async createFunctionPoint(data) {
        const newFunctionPoint = await this.functionPointDAO.createFunctionPointRecord(data);
        return newFunctionPoint;
    }
    async getFunctionPoint(functionPointID) {
        return await this.functionPointDAO.getFunctionPointRecord({
            functionPointID,
        });
    }
    async updateFunctionPoint(functionPointID, data) {
        return await this.functionPointDAO.updateFunctionpointRecord(functionPointID, data);
    }
    async deleteFunctionPoint(functionPointID) {
        await this.functionPointDAO.deleteFunctionPointRecord(functionPointID);
    }
};
FunctionPointFeatureService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [functionPoint_dao_1.default])
], FunctionPointFeatureService);
exports.default = FunctionPointFeatureService;
//# sourceMappingURL=functionPoint.feature.service.js.map