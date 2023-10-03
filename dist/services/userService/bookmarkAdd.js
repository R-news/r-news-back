"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookmarkAdd = void 0;
const models_1 = require("@src/models");
const mongoose_1 = __importDefault(require("mongoose"));
const bookmarkAdd = async (articleId, userId) => {
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const user = await models_1.User.findById(userId);
        const isBookmarkAdded = user === null || user === void 0 ? void 0 : user.bookmarks.includes(articleId);
        if (isBookmarkAdded) {
            await models_1.User.findOneAndUpdate({ _id: userId }, { $pull: { bookmarks: articleId } }, { new: true });
        }
        else {
            await models_1.User.findOneAndUpdate({ _id: userId }, { $addToSet: { bookmarks: articleId } }, { new: true });
        }
        await session.commitTransaction();
    }
    catch (err) {
        await session.abortTransaction();
        throw err;
    }
    finally {
        session.endSession();
    }
    return;
};
exports.bookmarkAdd = bookmarkAdd;
//# sourceMappingURL=bookmarkAdd.js.map