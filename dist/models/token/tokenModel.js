"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Token = void 0;
const mongoose_1 = require("mongoose");
const tokenSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, require: true },
});
exports.Token = (0, mongoose_1.model)('Token', tokenSchema);
//# sourceMappingURL=tokenModel.js.map