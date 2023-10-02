import { NextFunction, Response } from 'express';
import { RequestWithAuthUser, UserDto } from 'models';
import { tokenService } from 'services/tokenService/tokenService';
import { ApiError } from 'utils/erros/cutomErrors';

export const authMiddleware = (
    req: RequestWithAuthUser,
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

        req.user = userData as UserDto;

        next();
    } catch (e) {
        return next(ApiError.AuthorizationError());
    }
};
