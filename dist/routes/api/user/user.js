"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const userController_1 = require("@src/controllers/userController");
const express_1 = require("express");
const authMiddleware_1 = require("@src/middlewares/authMiddleware");
exports.router = (0, express_1.Router)();
exports.router.get('/data', authMiddleware_1.authMiddleware, userController_1.userController.getData);
exports.router.get('/bookmarks', authMiddleware_1.authMiddleware, userController_1.userController.getUserBookmarks);
exports.router.patch('/like/:id', authMiddleware_1.authMiddleware, userController_1.userController.like);
exports.router.patch('/addBookmark/:id', authMiddleware_1.authMiddleware, userController_1.userController.addBookmark);
//# sourceMappingURL=user.js.map