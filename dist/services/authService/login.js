"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const models_1 = require("@src/models");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const bcrypt_1 = __importDefault(require("bcrypt"));
const helpers_1 = require("@src/utils/helpers");
const login = async (email, password) => {
    const user = await models_1.User.findOne({ email });
    if (!user) {
        throw cutomErrors_1.ApiError.BadRequestError('Login details are incorrect.');
    }
    const isPassEquals = await bcrypt_1.default.compare(password, user.password);
    if (!isPassEquals) {
        throw cutomErrors_1.ApiError.BadRequestError('Login details are incorrect.');
    }
    return await (0, helpers_1.getUserWithTokens)(user);
};
exports.login = login;
//# sourceMappingURL=login.js.map