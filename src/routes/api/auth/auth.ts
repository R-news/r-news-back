import { Router } from 'express';

export const router = Router();

router.post('/registration');
router.post('/login');
router.post('/logout');
router.post('/activate/:link');
router.post('/refresh');
router.post('/users');
