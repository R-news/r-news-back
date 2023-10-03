"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const registration_1 = require("./registration");
const logout_1 = require("./logout");
const login_1 = require("./login");
const activate_1 = require("./activate");
const refresh_1 = require("./refresh");
exports.authService = {
    registration: registration_1.registration,
    login: login_1.login,
    logout: logout_1.logout,
    activate: activate_1.activate,
    refresh: refresh_1.refresh,
};
//# sourceMappingURL=index.js.map