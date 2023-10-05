import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';

export function validateObjectId(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
  
    // Check if the ID matches the ObjectId pattern
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: 'Invalid Object ID',
      });
    }
  
    // If the ID is valid, proceed to the next middleware
    next();
}