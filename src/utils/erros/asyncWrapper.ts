import { NextFunction, Request, Response } from 'express';

export const asyncWrapper = (ctrl: any) => {
    const func = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await ctrl(req, res, next);
        } catch (e) {
            next(e);
        }
    };

    return func;
};
