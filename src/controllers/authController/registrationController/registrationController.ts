import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { authService } from '@src/services/authService';
import {
    REFRESH_EXPIRES_IN_MILLI_SECONDS,
    REFRESH_TOKEN,
} from '@src/utils/const/tokensExpiresInMilliseconds';

export const registrationController = async (req: Request, res: Response) => {
    const { email, password, username } = req.body;
    const userData = await authService.registration(email, password, username);

    res.cookie(REFRESH_TOKEN, userData.refreshToken, {
        maxAge: REFRESH_EXPIRES_IN_MILLI_SECONDS,
        httpOnly: true, //TODO SECURE,
        secure: process.env.NODE_ENV === 'development' ? false : true,
        sameSite: 'lax',
    }).status(StatusCodes.CREATED).json({
        code: StatusCodes.CREATED,
        status: 'success',
        userData,
    });

    // return res.status(StatusCodes.CREATED).json({
    //     code: StatusCodes.CREATED,
    //     status: 'success',
    //     userData,
    // });
};
