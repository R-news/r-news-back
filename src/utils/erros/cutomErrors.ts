import { StatusCodes, getReasonPhrase } from 'http-status-codes';
const {
    NOT_FOUND,
    UNAUTHORIZED,
    FORBIDDEN,
    BAD_REQUEST,
    INTERNAL_SERVER_ERROR,
    CONFLICT,
} = StatusCodes;

export class ApiError extends Error {
    status;
    errors;

    constructor(status: number | string, message: string, errors = []) {
        super(message);
        this.errors = errors;
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }

    static AuthorizationError(message = getReasonPhrase(UNAUTHORIZED)) {
        return new ApiError(UNAUTHORIZED, message);
    }

    static BadRequestError(message = getReasonPhrase(BAD_REQUEST)) {
        return new ApiError(BAD_REQUEST, message);
    }

    static ConflictError(message = getReasonPhrase(CONFLICT)) {
        return new ApiError(CONFLICT, message);
    }

    static NotFoundError(message = getReasonPhrase(NOT_FOUND)) {
        return new ApiError(NOT_FOUND, message);
    }

    static AuthenticationError(message = getReasonPhrase(FORBIDDEN)) {
        return new ApiError(FORBIDDEN, message);
    }

    static InternalServerError(
        message = getReasonPhrase(INTERNAL_SERVER_ERROR),
    ) {
        return new ApiError(INTERNAL_SERVER_ERROR, message);
    }
}
