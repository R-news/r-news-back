import { connectMongo } from "@src/utils/jest/connectMongo";
import { logoutTestUser } from "@src/utils/jest/user/logoutTestUser";
import { refreshTokenExists } from "@src/utils/jest/user/refreshTokenExists";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";

describe("Test auth controller", () => {
    connectMongo()

      test("should logout user with 204", async () => {
        await registerTestUser()
        const { statusCode, headers } = await logoutTestUser()

        const cookies = headers['set-cookie'];

        expect(refreshTokenExists(cookies)).toBeFalsy();

        expect(statusCode).toBe(204);
      });

})