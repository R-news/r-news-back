import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithAuthUser, User } from '@src/models';

export const getDataController = async (
    req: RequestWithAuthUser,
    res: Response,
) => {
    const userData = await User.findById(req.user.id, {
        bookmarks: 1,
        username: 1,
        isPremium: 1,
        avatar: 1,
        likes: 1,
        settings: 1,
        _id: 0,
    });

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        userData,
    });
};
