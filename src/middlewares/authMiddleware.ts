import { NextFunction, Request, Response } from 'express';
import { tokenService } from 'services/tokenService/tokenService';
import { ApiError } from 'utils/erros/cutomErrors';

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.AuthorizationError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.AuthorizationError());
        }

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.AuthorizationError());
        }

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore TODO
        req.user = userData;

        next();
    } catch (e) {
        return next(ApiError.AuthorizationError());
    }
};
