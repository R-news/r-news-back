"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const models_1 = require("@src/models");
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const activate = async (activationLink) => {
    const user = await models_1.User.findOne({ activationLink });
    if (!user) {
        throw cutomErrors_1.ApiError.NotFoundError('User is not found.');
    }
    user.isActivated = true;
    await user.save();
};
exports.activate = activate;
//# sourceMappingURL=activate.js.map