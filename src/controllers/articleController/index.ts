import { asyncWrapper } from '@src/utils/erros/asyncWrapper';
import { getMainPageArticlesController } from './getMainPageArticlesController/getMainPageArticlesController';
import { getArticleByIdController } from './getArticleByIdController/getArticleByIdController';

export const articleController = {
    getMainPageArticles: asyncWrapper(getMainPageArticlesController),
    getArticleById: asyncWrapper(getArticleByIdController)
};
