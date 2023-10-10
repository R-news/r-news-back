import {  User } from "@src/models";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getUserProfileController = async (req:Request, res:Response) => {
    const {id} = req.params;
    const userData = await User.findById(id, {
        password: 0,
        _id: 1,
    });

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        userData,
    });
}