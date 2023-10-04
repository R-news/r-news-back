import app from "@src/main";

import request from "supertest";
import { connectMongo } from "@src/utils/jest/connectMongo";

describe("Test articles controller", () => {
    connectMongo()

      test("get home articles with status 200", async () => {
       await request(app).get(`/api/articles/home`).expect(200);
      });

      test("route not found 404", async () => {
        await request(app).get(`/api/articles/homd`).expect(404);
       });
})