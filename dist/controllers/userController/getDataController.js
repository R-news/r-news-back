"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataController = void 0;
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("@src/models");
const getDataController = async (req, res) => {
    const userData = await models_1.User.findById(req.user.id, {
        bookmarks: 1,
        username: 1,
        isPremium: 1,
        avatar: 1,
        likes: 1,
        _id: 0,
    });
    res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.OK,
        status: 'success',
        userData,
    });
};
exports.getDataController = getDataController;
//# sourceMappingURL=getDataController.js.map