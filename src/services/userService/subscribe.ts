import { User } from '@src/models';
import mongoose, { ObjectId } from 'mongoose';
import { ApiError } from '@src/utils/erros/cutomErrors';

export const subscribe = async (subscribingId: string, userId: ObjectId) => {
    let user: object | null;

    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const userExist = await User.findOne({ _id: subscribingId });
        if(!userExist){
            throw ApiError.BadRequestError('User not found.');
        }

        
        const alreadySub = userExist.subscribers.includes(userId);

        if (alreadySub) {
          user = await User.findOneAndUpdate(
                { _id: userId },
                { $pull: { subscribers: subscribingId } },
                { new: true },
            );

             await User.findOneAndUpdate(
                { _id: subscribingId },
                { $pull: { subscribers: userId } },
                { new: true },
            );
        } else {
            user = await User.findOneAndUpdate(
                { _id: userId },
                { $addToSet: { subscribers: subscribingId } },
                { new: true },
            );

             await User.findOneAndUpdate(
                { _id: subscribingId },
                { $addToSet: { subscribers: userId } },
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

    return user;
};
