"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./utils/config/aliases");
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
const api_1 = require("./routes/api");
const environment_1 = require("@src/environments/environment");
const errorMiddleware_1 = require("@src/middlewares/errorMiddleware");
const app = (0, express_1.default)();
const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use((0, morgan_1.default)(formatsLogger));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({ credentials: true, origin: (0, environment_1.getEnvironmentVariables)().urls.client }));
app.use(express_1.default.static('public'));
app.use('/api/auth', api_1.authRouter);
app.use('/api/articles', api_1.articlesRouter);
app.use('/api/user', api_1.userRouter);
app.use(errorMiddleware_1.errorMiddleware);
exports.default = app;
//# sourceMappingURL=main.js.map