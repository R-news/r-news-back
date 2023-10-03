"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkAddController = void 0;
const http_status_codes_1 = require("http-status-codes");
const userService_1 = require("@src/services/userService");
const bookmarkAddController = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    await userService_1.userService.bookmarkAdd(id, userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.NO_CONTENT,
        status: 'success',
    });
};
exports.bookmarkAddController = bookmarkAddController;
//# sourceMappingURL=bookmarkAddController.js.map