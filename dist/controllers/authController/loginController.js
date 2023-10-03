"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const http_status_codes_1 = require("http-status-codes");
const authService_1 = require("@src/services/authService");
const tokensExpiresInMilliseconds_1 = require("@src/utils/const/tokensExpiresInMilliseconds");
const loginController = async (req, res) => {
    const { email, password } = req.body;
    const userData = await authService_1.authService.login(email, password);
    res.cookie(tokensExpiresInMilliseconds_1.REFRESH_TOKEN, userData.refreshToken, {
        maxAge: tokensExpiresInMilliseconds_1.REFRESH_EXPIRES_IN_MILLI_SECONDS,
        httpOnly: true,
        sameSite: 'lax',
    });
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.OK,
        status: 'success',
        userData,
    });
};
exports.loginController = loginController;
//# sourceMappingURL=loginController.js.map