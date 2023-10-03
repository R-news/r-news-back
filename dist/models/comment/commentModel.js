"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const mongoose_1 = require("mongoose");
const commentSchema = new mongoose_1.Schema({
    text: { type: String, required: true },
    articleId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Article',
    },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: {
        type: Number,
        default: 0,
    },
}, { versionKey: false, timestamps: true });
exports.Comment = (0, mongoose_1.model)('Comment', commentSchema);
//# sourceMappingURL=commentModel.js.map