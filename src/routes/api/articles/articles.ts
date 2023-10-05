import { articleController } from '@src/controllers/articleController';
import { validateObjectId } from '@src/utils/erros/validateObjectId';
import { Router } from 'express';

export const router = Router();

/**
 * @openapi
 * /api/articles/home:
 *   get:
 *     summary: Get articles for the main page
 *     description: Retrieve articles with usernames and avatars for the main page.
 *     tags:
 *       - Article
 *     responses:
 *       200:
 *         description: Successful response with articles for the main page.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code for the response (200 for success).
 *                 status:
 *                   type: string
 *                   description: A string indicating the status of the response.
 *                 articles:
 *                   type: array
 *                   items:
 *                       $ref: '#/components/schemas/ArticleWithUserData'
 *       500:
 *         description: Internal server error.
 */
router.get('/home', articleController.getMainPageArticles);
router.get('/:articleId', validateObjectId, articleController.getArticleById);
