"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refresh = void 0;
const models_1 = require("@src/models");
const tokenService_1 = require("@src/services/tokenService/tokenService");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const helpers_1 = require("@src/utils/helpers");
const refresh = async (refreshToken) => {
    if (!refreshToken) {
        throw cutomErrors_1.ApiError.AuthorizationError();
    }
    const userData = tokenService_1.tokenService.validateRefreshToken(refreshToken);
    const token = await tokenService_1.tokenService.findToken(refreshToken);
    if (!userData || !token) {
        throw cutomErrors_1.ApiError.AuthorizationError();
    }
    const user = await models_1.User.findById(userData.id);
    if (!user) {
        throw cutomErrors_1.ApiError.AuthorizationError();
    }
    return await (0, helpers_1.getUserWithTokens)(user);
};
exports.refresh = refresh;
//# sourceMappingURL=refresh.js.map