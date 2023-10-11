import {
    codeSchema,
    imageSchema,
    textSchema,
    videoSchema,
} from '@src/middlewares/joi/user/user';
import { Article, IArticle } from '@src/models';
import { ArticleBlockType } from '@src/models/article/types/artilceEnums';
import { ApiError } from '@src/utils/erros/cutomErrors';

export const createArticle = async (data: IArticle) => {
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        const validate = data.blocks.map((el) => {
            if (el.type === ArticleBlockType.TEXT) {
                return textSchema.validate(el);
            }
            if (el.type === ArticleBlockType.CODE) {
                return codeSchema.validate(el);
            }
            if (el.type === ArticleBlockType.VIDEO) {
                return videoSchema.validate(el);
            }
            if (el.type === ArticleBlockType.IMAGE) {
                return imageSchema.validate(el);
            }
        });
        const hasError = validate.some((item) => item.error);
        if (hasError) {
            const errors = validate
                .filter((item) => item.error)
                .map((item) => item.error.message);
            throw ApiError.BadRequestError(errors);
        }

        const article = await Article.create(data);


        return article
    } catch (e) {
        throw ApiError.BadRequestError(e.message);
    }
};
