"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = exports.Comment = exports.Article = exports.User = void 0;
var userModel_1 = require("./user/userModel");
Object.defineProperty(exports, "User", { enumerable: true, get: function () { return userModel_1.User; } });
var articleModel_1 = require("./article/articleModel");
Object.defineProperty(exports, "Article", { enumerable: true, get: function () { return articleModel_1.Article; } });
var commentModel_1 = require("./comment/commentModel");
Object.defineProperty(exports, "Comment", { enumerable: true, get: function () { return commentModel_1.Comment; } });
var tokenModel_1 = require("./token/tokenModel");
Object.defineProperty(exports, "Token", { enumerable: true, get: function () { return tokenModel_1.Token; } });
//# sourceMappingURL=index.js.map