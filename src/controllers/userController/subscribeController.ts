import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithAuthUser } from '@src/models';
import { userService } from '@src/services/userService';
import { ObjectId } from 'mongoose';

export const subscribeController = async (
    req: RequestWithAuthUser,
    res: Response,
) => {
    const { id } = req.params;
    const userId: unknown = req.user.id;

    const user = await userService.subscribe(id, userId as ObjectId);

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        user,
    });
};
