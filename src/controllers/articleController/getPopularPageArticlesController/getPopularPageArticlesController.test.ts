import app from "@src/main";

import request from "supertest";
import { connectMongo } from "@src/utils/jest/connectMongo";

describe("Test  popular articles controller", () => {
    connectMongo()

      test("get home articles with status 200", async () => {
       await request(app).get(`/api/articles/popular`).expect(200);
      });

      test("400", async () => {
        await request(app).get(`/api/articles/pop`).expect(400);
       });
})