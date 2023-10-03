"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = void 0;
const tokenService_1 = require("@src/services/tokenService/tokenService");
const logout = async (refreshToken) => {
    const token = await tokenService_1.tokenService.removeToken(refreshToken);
    return token;
};
exports.logout = logout;
//# sourceMappingURL=logout.js.map