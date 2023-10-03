/**
 * @openapi
 * components:
 *  schemas:
 *    Comment:
 *      type: object
 *      required:
 *        - text
 *        - articleId
 *        - userId
 *        - likes
 *      properties:
 *        text:
 *          type: string
 *          default: comment
 *        articleId:
 *          type: objectId
 *          default: objectId
 *        userId:
 *          type: objectId
 *          default: objectId
 *        likes:
 *          type: number
 *          default: 0
 */
