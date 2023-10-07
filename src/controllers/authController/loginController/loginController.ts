import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authService } from '@src/services/authService';
import {
    REFRESH_EXPIRES_IN_MILLI_SECONDS,
    REFRESH_TOKEN,
} from '@src/utils/const/tokensExpiresInMilliseconds';

export const loginController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const userData = await authService.login(email, password);

    res.cookie(REFRESH_TOKEN, userData.refreshToken, {
        maxAge: REFRESH_EXPIRES_IN_MILLI_SECONDS,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'none',
    });

    return res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        userData,
    });
};
