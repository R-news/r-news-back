import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { RequestWithAuthUser, User } from 'models';
import { articlePipelines } from 'utils/pipelines/articlePipelines';

export const getUserBookmarksController = async (
    req: RequestWithAuthUser,
    res: Response,
) => {
    const userId = req.user.id;

const articles = await User.aggregate(articlePipelines.getBookmarksArticlesByUserId(userId));

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        articles,
    });
};

