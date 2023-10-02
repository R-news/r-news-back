import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithAuthUser } from 'models';
import { userService } from 'services/userService';

export const bookmarkAddController = async (
    req: RequestWithAuthUser,
    res: Response,
) => {
    const { id } = req.params;
    const userId = req.user.id;

    await userService.bookmarkAdd(id, userId);

    res.status(StatusCodes.OK).json({
        code: StatusCodes.NO_CONTENT,
        status: 'success',
    });
};
