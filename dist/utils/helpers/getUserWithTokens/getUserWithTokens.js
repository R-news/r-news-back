"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserWithTokens = void 0;
const dtos_1 = require("@src/dtos");
const tokenService_1 = require("@src/services/tokenService/tokenService");
const getUserWithTokens = async (user) => {
    const userData = new dtos_1.UserDto(user).toObject();
    const tokens = await tokenService_1.tokenService.generateToken(userData);
    await tokenService_1.tokenService.saveToken(user._id, tokens.refreshToken);
    return { ...tokens, ...userData };
};
exports.getUserWithTokens = getUserWithTokens;
//# sourceMappingURL=getUserWithTokens.js.map