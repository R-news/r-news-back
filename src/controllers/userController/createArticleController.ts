import { RequestWithAuthUser } from "@src/models"
import { userService } from "@src/services/userService";
import { Response } from "express"
import { StatusCodes } from "http-status-codes";

export const createArticleController = async (req:RequestWithAuthUser,res:Response) => {
    const data = req.body;
    const userId = req.user.id;
    data.userId = userId
    const article =  await userService.createArticle(data)


    res.status(StatusCodes.CREATED).json({
        code: StatusCodes.CREATED,
        status: 'success',
        article
    });
}