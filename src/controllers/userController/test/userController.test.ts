import app from "@src/main";
import request from "supertest";
import { connectMongo } from "@src/utils/jest/connectMongo";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";
import { loginTestUser } from "@src/utils/jest/user/loginTestUser";

describe("Test user controller", () => {
    connectMongo()

      test("should return userData with 200", async () => {
        await registerTestUser()
        const { body} = await loginTestUser()
        const { statusCode} = await request(app).get(`/api/user/data`).set('Authorization', `Bearer ${body.userData.accessToken}`);;

        expect(statusCode).toBe(200);
      });

      
      test("No token", async () => {
        const { statusCode} = await request(app).get(`/api/user/data`)
        expect(statusCode).toBe(401);
      });

      test("should return user bookmarks with 200", async () => {
        await registerTestUser()
        const { body} = await loginTestUser()
        const { statusCode} = await request(app).get(`/api/user/bookmarks`).set('Authorization', `Bearer ${body.userData.accessToken}`);;

        expect(statusCode).toBe(200);
      });
})