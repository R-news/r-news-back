"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    isPremium: { type: Boolean, default: false },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        required: [true, 'Role is required'],
        enum: ['admin', 'moderator', 'user'],
    },
    avatar: {
        type: String,
        default: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
    },
    myArticles: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Article',
        },
    ],
    bookmarks: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Article',
        },
    ],
    likes: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Article',
        },
    ],
    settings: {
        type: Object,
        default: {},
    },
}, { timestamps: true });
userSchema.pre('save', async function () {
    if (this.isNew) {
        this.password = await bcrypt_1.default.hash(this.password, 10);
    }
});
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=userModel.js.map