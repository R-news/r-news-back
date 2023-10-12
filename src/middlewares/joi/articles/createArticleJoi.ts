import { ArticleType } from '@src/models/article/types/artilceEnums';
import Joi from 'joi'

export const codeSchema = Joi.object({
    id: Joi.string().required(),
    type:  Joi.valid('CODE'),
    code: Joi.string().required(),
    title: Joi.string().optional()
  });

  export const imageSchema = Joi.object({
    id: Joi.string().required(),
    type:  Joi.valid('IMAGE'),
    src: Joi.string().required(),
    title: Joi.string().optional()
  });
  export const videoSchema = Joi.object({
    id: Joi.string().required(),
    type:  Joi.valid('VIDEO'),
    src: Joi.string().required(),
    title: Joi.string().optional()
  });

  export const textSchema = Joi.object().keys({
    id: Joi.string().required(),
    type: Joi.valid('TEXT'),
    paragraphs: Joi.array().items(Joi.string()).required(),
    title: Joi.string().optional()
  })

export const createArticleJoi = Joi.object({
    title: Joi.string().max(200).min(5).required(),
    subtitle: Joi.string().max(300).min(5).optional(),
    img: Joi.string().optional(),
    type: Joi.string().valid(...Object.values(ArticleType)).required(),
    blocks: Joi.array().items(
        Joi.alternatives().try(codeSchema, textSchema, videoSchema, imageSchema)
    ).min(1).required(),
})


        // Joi.object({
        //     type: Joi.string().valid('CODE', 'IMAGE', 'VIDEO', 'TEXT').required(),
        //     code: Joi.string().when('type', { is: 'CODE', then: Joi.required() }),
        //     src: Joi.string().when('type', { is: 'IMAGE', then: Joi.required() }),
        //     title: Joi.string().optional(),
        //     paragraphs: Joi.array()
        //     .items(Joi.string())
        //     .when('type', { is: 'TEXT', then: Joi.required() })
        //     .min(1)
        //     .required(),
        // })