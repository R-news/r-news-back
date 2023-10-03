"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.likeArticle = void 0;
const models_1 = require("@src/models");
const mongoose_1 = __importDefault(require("mongoose"));
const cutomErrors_1 = require("@src/utils/erros/cutomErrors");
const likeArticle = async (articleId, userId) => {
    let article = null;
    const session = await mongoose_1.default.startSession();
    session.startTransaction();
    try {
        const articleExist = await models_1.Article.findOne({ _id: articleId });
        if (!articleExist) {
            throw cutomErrors_1.ApiError.BadRequestError('Article not found.');
        }
        const isLikedByUser = articleExist.likes.includes(userId);
        if (isLikedByUser) {
            await models_1.User.findOneAndUpdate({ _id: userId }, { $pull: { likes: articleId } }, { new: true });
            await models_1.Article.findOneAndUpdate({ _id: articleId }, { $pull: { likes: userId } }, { new: true });
        }
        else {
            await models_1.User.findOneAndUpdate({ _id: userId }, { $addToSet: { likes: articleId } }, { new: true });
            article = await models_1.Article.findOneAndUpdate({ _id: articleId }, { $addToSet: { likes: userId } }, { new: true });
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
    return article;
};
exports.likeArticle = likeArticle;
//# sourceMappingURL=likeArticle.js.map