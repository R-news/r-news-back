import { Router } from 'express';

export const router = Router();

/**
 * @openapi
 * /api/service/healthcheck:
 *   get:
 *     tags:
 *       - Healthcheck
 *     description: Response if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */

router.get('/healthcheck', (req, res) => {
    res.status(200).send('Server is running properly');
});