import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { authService } from 'services/authService';
import {
    REFRESH_EXPIRES_IN_MILLI_SECONDS,
    REFRESH_TOKEN,
} from 'utils/const/tokensExpiresInMilliseconds';

export const registrationController = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    const userData = await authService.registration(email, password, username);
    res.cookie(REFRESH_TOKEN, userData.refreshToken, {
        maxAge: REFRESH_EXPIRES_IN_MILLI_SECONDS,
        httpOnly: true, //TODO SECURE,
    });

    return res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        userData,
    });
};
