"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordOperationError = exports.RecordNotFoundError = void 0;
class RecordNotFoundError extends Error {
    constructor(message = 'UNDEFINED') {
        super(message);
        this.errorCode = 1;
        this.details = this.stack;
    }
}
exports.RecordNotFoundError = RecordNotFoundError;
class RecordOperationError extends Error {
    constructor(message = 'UNDEFINED') {
        super(message);
        this.errorCode = 1;
        this.details = this.stack;
    }
}
exports.RecordOperationError = RecordOperationError;
//# sourceMappingURL=errors.js.map