import app from "@src/main";
import request from "supertest";

export const logoutTestUser = async () => {
    return  await request(app).post(`/api/auth/logout`);
}