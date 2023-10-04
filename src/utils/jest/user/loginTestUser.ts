import app from "@src/main";
import request from "supertest";

const userInput = {
    email: "test@example.com",
    password: "Password123",
  };
  
export const loginTestUser = async (data = userInput) => {
    return  await request(app).post(`/api/auth/login`).send(data);
}