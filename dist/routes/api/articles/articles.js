"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const articleController_1 = require("@src/controllers/articleController");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.get('/home', articleController_1.articleController.getMainPageArticles);
//# sourceMappingURL=articles.js.map