import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { Article } from 'models';
import { articlePipelines } from 'utils/pipelines/articlePipelines';

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
