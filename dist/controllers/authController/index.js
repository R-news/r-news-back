"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const registrationController_1 = require("./registrationController");
const activateController_1 = require("./activateController");
const logoutController_1 = require("./logoutController");
const refreshController_1 = require("./refreshController");
const loginController_1 = require("./loginController");
const asyncWrapper_1 = require("@src/utils/erros/asyncWrapper");
const authController = {
    registration: (0, asyncWrapper_1.asyncWrapper)(registrationController_1.registrationController),
    login: (0, asyncWrapper_1.asyncWrapper)(loginController_1.loginController),
    activate: (0, asyncWrapper_1.asyncWrapper)(activateController_1.activateController),
    logout: (0, asyncWrapper_1.asyncWrapper)(logoutController_1.logoutController),
    refresh: (0, asyncWrapper_1.asyncWrapper)(refreshController_1.refreshController),
};
exports.authController = authController;
//# sourceMappingURL=index.js.map