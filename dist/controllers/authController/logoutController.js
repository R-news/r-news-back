"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutController = void 0;
const http_status_codes_1 = require("http-status-codes");
const authService_1 = require("@src/services/authService");
const tokensExpiresInMilliseconds_1 = require("@src/utils/const/tokensExpiresInMilliseconds");
const logoutController = async (req, res) => {
    const { refreshToken } = req.cookies;
    await authService_1.authService.logout(refreshToken);
    res.clearCookie(tokensExpiresInMilliseconds_1.REFRESH_TOKEN);
    return res.status(http_status_codes_1.StatusCodes.NO_CONTENT).json();
};
exports.logoutController = logoutController;
//# sourceMappingURL=logoutController.js.map