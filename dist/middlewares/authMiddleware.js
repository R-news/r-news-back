"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const tokenService_1 = require("@src/services/tokenService/tokenService");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(cutomErrors_1.ApiError.AuthorizationError());
        }
        const accessToken = authorizationHeader.split(' ')[1];
        if (!accessToken) {
            return next(cutomErrors_1.ApiError.AuthorizationError());
        }
        const userData = tokenService_1.tokenService.validateAccessToken(accessToken);
        if (!userData) {
            return next(cutomErrors_1.ApiError.AuthorizationError());
        }
        req.user = userData;
        next();
    }
    catch (e) {
        return next(cutomErrors_1.ApiError.AuthorizationError());
    }
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map