"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = exports.articlesRouter = exports.authRouter = void 0;
var auth_1 = require("./auth/auth");
Object.defineProperty(exports, "authRouter", { enumerable: true, get: function () { return auth_1.router; } });
var articles_1 = require("./articles/articles");
Object.defineProperty(exports, "articlesRouter", { enumerable: true, get: function () { return articles_1.router; } });
var user_1 = require("./user/user");
Object.defineProperty(exports, "userRouter", { enumerable: true, get: function () { return user_1.router; } });
//# sourceMappingURL=index.js.map