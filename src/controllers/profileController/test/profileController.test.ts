import app from "@src/main";
import request from "supertest";
import { connectMongo } from "@src/utils/jest/connectMongo";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";
import { loginTestUser } from "@src/utils/jest/user/loginTestUser";

describe("Test profile controller", () => {
    connectMongo()

    let userData;
      test("should return profile data with 200", async () => {
        await registerTestUser()
        const { body} = await loginTestUser()
        userData = body.userData
        const { statusCode} = await request(app).get(`/api/profile/${userData.id}`);

        expect(statusCode).toBe(200);
      });

      
      test("Bad id for profile with 400 error", async () => {
        const { statusCode} = await request(app).get(`/api/profile/${'fdfd'}`)
        expect(statusCode).toBe(400);
      });

})