import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const validateBody = (schema:any) => async (req:Request, res:Response, next:NextFunction) => {
    const body = req.body;
    try {
      await schema.validateAsync(body);
      return next();
    } catch (error) {
      error.statusCode = StatusCodes.BAD_REQUEST
  
      next(res.status(400).json({ message: error }))
    }
  };