import { connectMongo } from "@src/utils/jest/connectMongo";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";
import { loginTestUser } from "@src/utils/jest/user/loginTestUser";
import { refreshTokenExists } from "@src/utils/jest/user/refreshTokenExists";


describe("Test auth controller", () => {
    connectMongo()

      test("should login user with status 200", async () => {
        await registerTestUser()
        const { statusCode, headers} = await loginTestUser()
        const cookies = headers['set-cookie'];
        
        expect(refreshTokenExists(cookies)).toBeTruthy();
        expect(statusCode).toBe(200);
      });

      
      test("wrong credentials", async () => {
        const userInput = {
          email: "test@example.co",
          password: "Password123",
        };
        const { statusCode} = await loginTestUser(userInput)
        expect(statusCode).toBe(400);
      });
})