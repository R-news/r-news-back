"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeArticleController = void 0;
const http_status_codes_1 = require("http-status-codes");
const userService_1 = require("@src/services/userService");
const likeArticleController = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.id;
    const article = await userService_1.userService.likeArticle(id, userId);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.OK,
        status: 'success',
        article,
    });
};
exports.likeArticleController = likeArticleController;
//# sourceMappingURL=likeArticleController.js.map