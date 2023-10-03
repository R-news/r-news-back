"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMainPageArticlesController = void 0;
const http_status_codes_1 = require("http-status-codes");
const models_1 = require("@src/models");
const articlePipelines_1 = require("@src/utils/pipelines/articlePipelines");
const getMainPageArticlesController = async (req, res) => {
    const pipeline = articlePipelines_1.articlePipelines.getArticlesWithUsernameAndAvatar();
    const articles = await models_1.Article.aggregate(pipeline);
    res.status(http_status_codes_1.StatusCodes.OK).json({
        code: http_status_codes_1.StatusCodes.OK,
        status: 'success',
        articles,
    });
};
exports.getMainPageArticlesController = getMainPageArticlesController;
//# sourceMappingURL=getMainPageArticlesController.js.map