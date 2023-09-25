import { NextFunction, Request, Response } from 'express';
import { ApiError } from 'utils/erros/cutomErrors';

export const errorMiddleware = (
    err: unknown,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    if (err instanceof ApiError) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }

    next();
    return res.status(500).json({ message: 'Unexpected error' });
};
