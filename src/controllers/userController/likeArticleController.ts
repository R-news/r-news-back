import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RequestWithAuthUser } from 'models';
import { userService } from 'services/userService';

export const likeArticleController = async (
    req: RequestWithAuthUser,
    res: Response,
) => {
    const { id } = req.params;
    const userId = req.user.id;

    const article = await userService.likeArticle(id, userId);

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        article,
    });
};
