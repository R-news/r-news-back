"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const models_1 = require("@src/models");
const tokensExpiresInMilliseconds_1 = require("@src/utils/const/tokensExpiresInMilliseconds");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const environment_1 = require("@src/environments/environment");
if (!(0, environment_1.getEnvironmentVariables)().jwt_access_secret_key || !(0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key) {
    throw new Error('Environment variable is not set');
}
exports.tokenService = {
    generateToken: async (payload) => {
        try {
            const accessToken = jsonwebtoken_1.default.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_access_secret_key, {
                expiresIn: tokensExpiresInMilliseconds_1.ACCESS_EXPIRES_IN_MILLI_SECONDS,
            });
            const refreshToken = jsonwebtoken_1.default.sign(payload, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key, {
                expiresIn: tokensExpiresInMilliseconds_1.REFRESH_EXPIRES_IN_MILLI_SECONDS,
            });
            return {
                accessToken,
                refreshToken,
            };
        }
        catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    saveToken: async (userId, refreshToken) => {
        const tokenData = await models_1.Token.findOne({ user: userId });
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return await tokenData.save();
        }
        const token = await models_1.Token.create({ user: userId, refreshToken });
        return token;
    },
    removeToken: async (refreshToken) => {
        const tokenData = await models_1.Token.deleteOne({ refreshToken });
        return tokenData;
    },
    findToken: async (refreshToken) => {
        const tokenData = await models_1.Token.findOne({ refreshToken });
        return tokenData;
    },
    validateAccessToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, (0, environment_1.getEnvironmentVariables)().jwt_access_secret_key);
            return userData;
        }
        catch {
            throw cutomErrors_1.ApiError.AuthorizationError();
        }
    },
    validateRefreshToken(token) {
        try {
            const userData = jsonwebtoken_1.default.verify(token, (0, environment_1.getEnvironmentVariables)().jwt_refresh_secret_key);
            return userData;
        }
        catch {
            throw cutomErrors_1.ApiError.AuthorizationError();
        }
    },
};
//# sourceMappingURL=tokenService.js.map