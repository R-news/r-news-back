"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registrationController = void 0;
const http_status_codes_1 = require("http-status-codes");
const authService_1 = require("@src/services/authService");
const tokensExpiresInMilliseconds_1 = require("@src/utils/const/tokensExpiresInMilliseconds");
const registrationController = async (req, res) => {
    const { email, password, username } = req.body;
    const userData = await authService_1.authService.registration(email, password, username);
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
exports.registrationController = registrationController;
//# sourceMappingURL=registrationController.js.map