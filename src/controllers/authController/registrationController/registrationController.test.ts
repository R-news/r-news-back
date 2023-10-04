import { connectMongo } from "@src/utils/jest/connectMongo";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";

describe("Test auth controller", () => {
    connectMongo()

      test("should return the user payload", async () => {
        const { statusCode, body, headers } = await registerTestUser()

        const cookies = headers['set-cookie'];
        const refreshTokenCookie= cookies.find(cookie => cookie.includes('refreshToken='));
        expect(refreshTokenCookie).toBeDefined();
        expect(body.userData).toHaveProperty('id');
        expect(body.userData).toHaveProperty('role');
        expect(body.userData).toHaveProperty('accessToken');
        expect(body.userData).toHaveProperty('refreshToken');
        expect(statusCode).toBe(201);
      });

      
      test("conflict 409 error", async () => {
        const { statusCode } = await registerTestUser()
        expect(statusCode).toBe(409);
      });

})