import { userController } from '@src/controllers/userController';
import { Router } from 'express';
import { authMiddleware } from '@src/middlewares/authMiddleware';
import { validateObjectId } from '@src/utils/erros/validateObjectId';

export const router = Router();


/**
 * @openapi
 * /api/user/data:
 *   get:
 *     summary: Get user data
 *     description: Retrieve user data including bookmarks, username, premium status, avatar, likes, and settings.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response with user data.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserDataResponse'
 *       401:
 *         description: Unauthorized request.
 *       500:
 *         description: Internal server error.
 * 
 * /api/user/bookmarks:
 *   get:
 *     summary: Get user bookmarks
 *     description: Retrieve articles that the user has bookmarked.
 *     tags:
 *       - User
 *     security:
 *       - bearerAuth: []   # Apply the bearerAuth security scheme here
 *     responses:
 *       200:
 *         description: Successful response with bookmarked articles.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                $ref: '#/components/schemas/ArticleWithUserData'
 *       401:
 *         description: Unauthorized request.
 *       500:
 *         description: Internal server error.
 */
router.get('/data', authMiddleware, userController.getData);
router.get('/bookmarks', authMiddleware, userController.getUserBookmarks);

/**
 * @openapi
 * /api/user/like/{id}:
 *   patch:
 *     summary: Like an article
 *     description: Like an article by its ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the article to like.
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []   # Apply the bearerAuth security scheme here
 *     responses:
 *       200:
 *         description: Successful response with the liked article.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code for the response (200 for success).
 *                   default: 200
 *                 status:
 *                   type: string
 *                   description: A string indicating the status of the response.
 *                 article:
 *                   $ref: '#/components/schemas/ArticleWithUserData'
 *       401:
 *         description: Unauthorized request.
 *       500:
 *         description: Internal server error.
 *
 * /api/user/addBookmark/{id}:
 *   patch:
 *     summary: Add an article to bookmarks
 *     description: Add an article to the user's bookmarks by its ID.
 *     tags:
 *       - User
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of the article to add to bookmarks.
 *         required: true
 *         schema:
 *           type: string
 *     security:
 *       - bearerAuth: []  
 *     responses:
 *       200:
 *         description: Successful response.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code for the response (200 for success).
 *                   default: 200
 *                 status:
 *                   type: string
 *                   description: A string indicating the status of the response.
 *       401:
 *         description: Unauthorized request.
 *       500:
 *         description: Internal server error.
 */
router.patch('/like/:id', validateObjectId, authMiddleware, userController.like);
router.patch('/addBookmark/:id', validateObjectId, authMiddleware, userController.addBookmark);

router.patch('/subscribe/:id',validateObjectId, authMiddleware, userController.subscribe);