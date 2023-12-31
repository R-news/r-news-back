import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authService } from '@src/services/authService';
import { REFRESH_TOKEN } from '@src/utils/const/tokensExpiresInMilliseconds';

export const logoutController = async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    await authService.logout(refreshToken);
    res.clearCookie(REFRESH_TOKEN);
    return res.status(StatusCodes.NO_CONTENT).json();
};
