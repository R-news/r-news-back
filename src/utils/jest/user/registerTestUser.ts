import app from "@src/main";
import request from "supertest";

const userInput = {
    email: "test@example.com",
    username: "Jane Doe",
    password: "Password123",
  };

  
export const registerTestUser = async (user = userInput) => {
    return  await request(app).post(`/api/auth/registration`).send(user);
}