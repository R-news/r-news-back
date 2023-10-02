import { bookmarkAddController } from './bookmarkAddController';
import { getDataController } from './getDataController';
import { getUserBookmarksController } from './getUserBookmarks';
import { likeArticleController } from './likeArticleController';

export const userController = {
    getData: getDataController,
    like: likeArticleController,
    addBookmark: bookmarkAddController,
    getUserBookmarks: getUserBookmarksController
};
