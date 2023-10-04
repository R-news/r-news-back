import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Article } from '@src/models';
import { articlePipelines } from '@src/utils/pipelines/articlePipelines';

export const getMainPageArticlesController = async (
    req: Request,
    res: Response,
) => {
    const pipeline = articlePipelines.getArticlesWithUsernameAndAvatar()
    const articles = await Article.aggregate(pipeline);

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        articles,
    });
};
