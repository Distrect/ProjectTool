"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateFunction = exports.calculateDataIntegrityValues = void 0;
const constant_1 = require("../constant");
const calculateDataIntegrityValues = (data) => Object.values(data).reduce((acc, val) => acc + val, 0);
exports.calculateDataIntegrityValues = calculateDataIntegrityValues;
const calculateFunction = (func, data) => {
    const constant = constant_1.functionPointAttributes[func];
    return Object.entries(data).reduce((acc, [dataKey, val]) => acc + val * constant[dataKey], 0);
};
exports.calculateFunction = calculateFunction;
//# sourceMappingURL=functionPoint.method.js.map