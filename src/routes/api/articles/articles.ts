import { articleController } from '@src/controllers/articleController';
import { Router } from 'express';

export const router = Router();

router.get('/home', articleController.getMainPageArticles);
