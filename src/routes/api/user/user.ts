import { userController } from 'controllers/userController';
import { Router } from 'express';
import { authMiddleware } from 'middlewares/authMiddleware';

export const router = Router();

router.get('/data', authMiddleware, userController.getData);
router.get('/bookmarks', authMiddleware, userController.getUserBookmarks);
router.patch('/like/:id', authMiddleware, userController.like);
router.patch('/addBookmark/:id', authMiddleware, userController.addBookmark);
