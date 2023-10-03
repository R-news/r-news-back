/**
 * @openapi
 * components:
 *  schemas:
 *    Article:
 *      type: object
 *      required:
 *        - title
 *        - subtitle
 *        - img
 *        - views
 *        - userId
 *        - type
 *        - blocks
 *      properties:
 *        title:
 *          type: string
 *        subtitle:
 *          type: string
 *        img:
 *          type: string
 *        views:
 *          type: integer
 *        userId:
 *          type: string
 *        type:
 *          type: string
 *          enum:
 *            - IT
 *            - GAMES
 *            - CINEMA
 *        blocks:
 *          type: array
 *          items:
 *            type: object
 *          minItems: 1
 *        comments:
 *          type: array
 *          items:
 *            type: string  # Assuming comments are represented by their IDs
 *        likes: 
 *          type: array
 *          items:
 *            type: string  # Assuming likes are represented by user IDs
 *    ArticleWithUserData:
 *      type: object
 *      required:
 *        - title
 *        - subtitle
 *        - img
 *        - views
 *        - username
 *        - avatar
 *        - type
 *        - blocks
 *      properties:
 *        title:
 *          type: string
 *        subtitle:
 *          type: string
 *        img:
 *          type: string
 *        views:
 *          type: integer
 *        username:
 *          type: string
 *        avatar:
 *          type: string
 *        type:
 *          type: string
 *          enum:
 *            - IT
 *            - GAMES
 *            - CINEMA
 *        blocks:
 *          type: array
 *          items:
 *            type: object
 *          minItems: 1
 *        comments:
 *          type: array
 *          items:
 *            type: string  # Assuming comments are represented by their IDs
 *        likes: 
 *          type: array
 *          items:
 *            type: string  # Assuming likes are represented by user IDs
 */