import { Request, Response } from 'express';
import { authService } from 'services/authService';

export const activateController = async (req: Request, res: Response) => {
    await authService.activate(req.params.link);
    return res.redirect(process.env.CLIENT_URL!);
};
