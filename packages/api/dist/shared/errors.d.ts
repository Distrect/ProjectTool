export declare class RecordNotFoundError extends Error {
    errorCode: number;
    details?: string;
    constructor(message?: string);
}
export declare class RecordOperationError extends Error {
    errorCode: number;
    details?: string;
    constructor(message?: string);
}
