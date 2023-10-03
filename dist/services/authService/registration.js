"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registration = void 0;
const models_1 = require("@src/models");
const uuid_1 = require("uuid");
const mailService_1 = require("@src/services/mailService/mailService");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const helpers_1 = require("@src/utils/helpers");
const { API_URL } = process.env;
const registration = async (email, password, username) => {
    const candidate = await models_1.User.findOne({ email });
    if (candidate) {
        throw cutomErrors_1.ApiError.ConflictError('User already exists.');
    }
    const id = (0, uuid_1.v4)();
    const activationLink = `${API_URL}/api/auth/activate/${id}`;
    const user = await models_1.User.create({
        email,
        password,
        username,
        activationLink: id,
        role: 'user',
    });
    await mailService_1.mailService.sendActivationEmail(email, activationLink);
    return await (0, helpers_1.getUserWithTokens)(user);
};
exports.registration = registration;
//# sourceMappingURL=registration.js.map