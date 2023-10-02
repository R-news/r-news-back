import { Article, IArticle, User } from 'models';
import mongoose from 'mongoose';
import { ApiError } from 'utils/erros/cutomErrors';

export const likeArticle = async (articleId: string, userId: string) => {
    let article: IArticle | null = null;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const articleExist = await Article.findOne({ _id: articleId });
        if(!articleExist){
            throw ApiError.BadRequestError('Article not found.');
        }
        const isLikedByUser = articleExist.likes.includes(userId);

        if (isLikedByUser) {
            await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { likes: articleId } },
                { new: true },
            );

            await Article.findOneAndUpdate(
                { _id: articleId },
                { $pull: { likes: userId } },
                { new: true },
            );
        } else {
            await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { likes: articleId } },
                { new: true },
            );

            article = await Article.findOneAndUpdate(
                { _id: articleId },
                { $addToSet: { likes: userId } },
                { new: true },
            );
        }
        await session.commitTransaction();
    } catch (err) {
        await session.abortTransaction();
        throw err;
    } finally {
        session.endSession();
    }

    return article;
};
