"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const bookmarkAddController_1 = require("./bookmarkAddController");
const getDataController_1 = require("./getDataController");
const getUserBookmarks_1 = require("./getUserBookmarks");
const likeArticleController_1 = require("./likeArticleController");
exports.userController = {
    getData: getDataController_1.getDataController,
    like: likeArticleController_1.likeArticleController,
    addBookmark: bookmarkAddController_1.bookmarkAddController,
    getUserBookmarks: getUserBookmarks_1.getUserBookmarksController
};
//# sourceMappingURL=index.js.map