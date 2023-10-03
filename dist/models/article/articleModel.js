"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Article = void 0;
const mongoose_1 = require("mongoose");
const articleSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    subtitle: { type: String, default: '' },
    img: { type: String, default: '' },
    views: { type: Number, default: 0 },
    userId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
        enum: ['IT', 'GAMES', 'CINEMA'],
    },
    blocks: {
        type: Array,
        required: [true, 'Article blocks is required'],
        validate: {
            validator: function (array) {
                return array.length >= 1;
            },
            message: 'At least one block is required',
        },
    },
    comments: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    likes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, { versionKey: false, timestamps: true });
exports.Article = (0, mongoose_1.model)('Article', articleSchema);
//# sourceMappingURL=articleModel.js.map