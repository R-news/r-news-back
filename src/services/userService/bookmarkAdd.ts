import { User } from 'models';
import mongoose from 'mongoose';

export const bookmarkAdd = async (articleId: string, userId: string) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const user = await User.findById(userId);
        const isBookmarkAdded = user?.bookmarks.includes(articleId);

        if (isBookmarkAdded) {
            await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { bookmarks: articleId } },
                { new: true },
            );

        } else {

            await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { bookmarks: articleId } },
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

    return;
};
