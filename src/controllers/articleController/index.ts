import { asyncWrapper } from '@src/utils/erros/asyncWrapper';
import { getMainPageArticlesController } from './getMainPageArticlesController';

export const articleController = {
    getMainPageArticles: asyncWrapper(getMainPageArticlesController),
};
