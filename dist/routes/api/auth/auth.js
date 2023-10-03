"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const authController_1 = require("@src/controllers/authController");
const express_1 = require("express");
exports.router = (0, express_1.Router)();
exports.router.post('/registration', authController_1.authController.registration);
exports.router.post('/login', authController_1.authController.login);
exports.router.post('/logout', authController_1.authController.logout);
exports.router.get('/activate/:link', authController_1.authController.activate);
exports.router.get('/refresh', authController_1.authController.refresh);
exports.router.get('/users');
//# sourceMappingURL=auth.js.map