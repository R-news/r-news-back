import { profileController } from "@src/controllers/profileController";
import { validateObjectId } from "@src/utils/erros/validateObjectId";
import { Router } from "express";

export const router = Router();


router.get('/:id', validateObjectId, profileController.getUserProfile);
