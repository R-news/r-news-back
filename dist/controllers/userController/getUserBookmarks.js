"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserBookmarksController = void 0;
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("@src/models");
const articlePipelines_1 = require("@src/utils/pipelines/articlePipelines");
const getUserBookmarksController = async (req, res) => {
    const userId = req.user.id;
    const articles = await models_1.User.aggregate(articlePipelines_1.articlePipelines.getBookmarksArticlesByUserId(userId));
    res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.OK,
        status: 'success',
        articles,
    });
};
exports.getUserBookmarksController = getUserBookmarksController;
//# sourceMappingURL=getUserBookmarks.js.map