import { articleController } from 'controllers/articleController';
import { Router } from 'express';

export const router = Router();

router.get('/home', articleController.getMainPageArticles);
