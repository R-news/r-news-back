"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
const http_status_codes_1 = require("http-status-codes");
const { NOT_FOUND, UNAUTHORIZED, FORBIDDEN, BAD_REQUEST, INTERNAL_SERVER_ERROR, CONFLICT, } = http_status_codes_1.StatusCodes;
class ApiError extends Error {
    constructor(status, message, errors = []) {
        super(message);
        this.errors = errors;
        this.status = status;
        Error.captureStackTrace(this, this.constructor);
    }
    static AuthorizationError(message = (0, http_status_codes_1.getReasonPhrase)(UNAUTHORIZED)) {
        return new ApiError(UNAUTHORIZED, message);
    }
    static BadRequestError(message = (0, http_status_codes_1.getReasonPhrase)(BAD_REQUEST)) {
        return new ApiError(BAD_REQUEST, message);
    }
    static ConflictError(message = (0, http_status_codes_1.getReasonPhrase)(CONFLICT)) {
        return new ApiError(CONFLICT, message);
    }
    static NotFoundError(message = (0, http_status_codes_1.getReasonPhrase)(NOT_FOUND)) {
        return new ApiError(NOT_FOUND, message);
    }
    static AuthenticationError(message = (0, http_status_codes_1.getReasonPhrase)(FORBIDDEN)) {
        return new ApiError(FORBIDDEN, message);
    }
    static InternalServerError(message = (0, http_status_codes_1.getReasonPhrase)(INTERNAL_SERVER_ERROR)) {
        return new ApiError(INTERNAL_SERVER_ERROR, message);
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=cutomErrors.js.map