import { Article } from "@src/models";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const getArticleByIdController = async(req:Request, res:Response) => {
    const {id} = req.params;
    const article = await Article.findById(id).populate('userId', 'username avatar');

    res.status(StatusCodes.OK).json({
        code: StatusCodes.OK,
        status: 'success',
        article,
    });
}