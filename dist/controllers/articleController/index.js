"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleController = void 0;
const asyncWrapper_1 = require("@src/utils/erros/asyncWrapper");
const getMainPageArticlesController_1 = require("./getMainPageArticlesController");
exports.articleController = {
    getMainPageArticles: (0, asyncWrapper_1.asyncWrapper)(getMainPageArticlesController_1.getMainPageArticlesController),
};
//# sourceMappingURL=index.js.map