import { authController } from '@src/controllers/authController';
import { Router } from 'express';

export const router = Router();

/**
 * @swagger
 * /api/auth/registration:
 *   post:
 *     summary: User registration
 *     description: Register a new user.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               username:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful registration.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuthData'  # Reference to the UserAuthData schema
 *       500:
 *         description: Internal server error.

 * /api/auth/login:
 *   post:
 *     summary: User login
 *     description: Log in a user.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successful login.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuthData'  # Reference to the UserAuthData schema
 *       500:
 *         description: Internal server error.

 * /api/auth/logout:
 *   post:
 *     summary: User logout
 *     description: Log out a user.
 *     tags:
 *       - Authentication
 *     responses:
 *       204:
 *         description: Successful logout.
 *       500:
 *         description: Internal server error.
 */
router.post('/registration', authController.registration);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

/**
 * @openapi
 * /api/auth/activate/{link}:
 *   get:
 *     summary: Activate user account
 *     description: Activate a user's account with the provided activation link.
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: path
 *         name: link
 *         description: The activation link for the user's account.
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       302:
 *         description: Redirect to the client URL after successful activation.
 *       500:
 *         description: Internal server error.

 * /api/auth/refresh:
 *   get:
 *     summary: Refresh user token
 *     description: Refresh the user's access token using a valid refresh token.
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Successful token refresh.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/UserAuthData'  # Reference to the UserAuthData schema
 *       500:
 *         description: Internal server error.
 */
router.get('/activate/:link', authController.activate);
router.get('/refresh', authController.refresh);

