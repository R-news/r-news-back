import { profileController } from "@src/controllers/profileController";
import { validateObjectId } from "@src/utils/erros/validateObjectId";
import { Router } from "express";

export const router = Router();

/**
 * @openapi
 * /api/profile/{id}:
 *   get:
 *     summary: Get user profile data.
 *     description: Get user profile data.
 *     tags:
 *       - Profile
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The ID of user profile.
 *         required: true
 *         schema:
 *           type: string
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
 */
router.get('/:id', validateObjectId, profileController.getUserProfile);
