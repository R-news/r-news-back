import { Request, Response } from 'express';
import { authService } from '@src/services/authService';
import { getEnvironmentVariables } from '@src/environments/environment';

export const activateController = async (req: Request, res: Response) => {
    await authService.activate(req.params.link);
    return res.redirect(getEnvironmentVariables().urls.client);
};
