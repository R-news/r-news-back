import { asyncWrapper } from '@src/utils/erros/asyncWrapper';
import { bookmarkAddController } from './bookmarkAddController';
import { createArticleController } from './createArticleController';
import { getDataController } from './getDataController';
import { getUserBookmarksController } from './getUserBookmarks';
import { likeArticleController } from './likeArticleController';

export const userController = {
    getData: asyncWrapper(getDataController),
    like: asyncWrapper(likeArticleController),
    addBookmark: asyncWrapper(bookmarkAddController),
    getUserBookmarks: asyncWrapper(getUserBookmarksController),
    createArticle: asyncWrapper(createArticleController)
};
