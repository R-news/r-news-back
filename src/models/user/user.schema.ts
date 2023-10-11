/**
 * @openapi
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *        - isPremium
 *        - isActivated
 *        - activationLink
 *        - role
 *        - avatar
 *        - myArticles
 *        - bookmarks
 *        - likes
 *        - settings
 *      properties:
 *        username:
 *          type: string
 *          default: John23B
 *        email:
 *          type: string
 *          default: John23B.doe@example.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *        isPremium:
 *          type: boolean
 *          default: false
 *        isActivated:
 *          type: boolean
 *          default: false
 *        activationLink:
 *          type: string
 *          default: 'http://test'
 *        role:
 *           type: string,
 *           enum: ["Administrator", "Cook", "Waiter"]
 *        avatar:
 *          type: string
 *          default: 'http://testavatar'
 *        myArticles:
 *          type: array
 *          default: []
 *        bookmarks:
 *          type: array
 *          default: []
 *        likes:
 *          type: array
 *          default: []
 *        settings:
 *          type: object
 *          default: {}
 *    UserDataResponse:
 *               type: object
 *               properties:
 *                 code:
 *                   type: integer
 *                   description: HTTP status code for the response (200 for success).
 *                 status:
 *                   type: string
 *                   description: A string indicating the status of the response.
 *                 userData:
 *                   type: object
 *                   properties:
 *                     bookmarks:
 *                       type: array
 *                       description: Array of user bookmarks.
 *                     username:
 *                       type: string
 *                       description: User's username.
 *                     isPremium:
 *                       type: boolean
 *                       description: Indicates if the user is a premium user.
 *                     avatar:
 *                       type: string
 *                       description: URL of the user's avatar.
 *                     likes:
 *                       type: array
 *                       default: []
 *                       description: array of articles id.
 *                     settings:
 *                       type: object
 *                       description: User settings.
 *    UserAuthData:
 *               type: object
 *               properties:
 *                     id:
 *                       type: string
 *                       description: userID.
 *                     isActivated:
 *                       type: boolean
 *                       description: if user activated.
 *                     username:
 *                       type: string
 *                       description: User name.
 *                     role:
 *                       type: string
 *                       description: User role.
 * 
 */
