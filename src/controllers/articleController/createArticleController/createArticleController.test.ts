import app from "@src/main";
import request from "supertest";
import { connectMongo } from "@src/utils/jest/connectMongo";
import { registerTestUser } from "@src/utils/jest/user/registerTestUser";
import { loginTestUser } from "@src/utils/jest/user/loginTestUser";

const articleData = {
    title: "The Art of Coding Consistency: Ensuring Uniformity in Your Projects",
    subtitle: "Why Consistency Matters in Software Development",
    img: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg",
    type: "IT",
    blocks: [
      {
        id: "1",
        type: "TEXT",
        paragraphs: [
            "Coding consistency is not just about aesthetics; it goes far beyond that.",
            "By ensuring that all your links, variables, and naming conventions follow a uniform pattern, you are essentially creating a roadmap for developers who work on your project.",
            "This roadmap simplifies the development process and reduces the likelihood of introducing errors or misunderstanding in the codebase."
          ],
        title: "Introduction"
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg",
        title: "The Beauty of Consistency"
      },
      {
        id: "3",
        type: "VIDEO",
        src: "https://www.youtube.com/watch?v=sJbexcm4Trk&ab_channel=Cyberpunk2077",
        title: "Watch the Video: The Power of Coding Consistency"
      },
      {
        id: "4",
        type: "CODE",
        code: "console.log('Hello, world!');",
        title: "Implementing Coding Consistency"
      },
      {
        id: "5",
        type: "TEXT",
        paragraphs: [
          "Coding consistency is not just about aesthetics; it goes far beyond that.",
          "By ensuring that all your links, variables, and naming conventions follow a uniform pattern, you are essentially creating a roadmap for developers who work on your project.",
          "This roadmap simplifies the development process and reduces the likelihood of introducing errors or misunderstanding in the codebase."
        ],
        title: "The Benefits of Consistency"
      }
    ]
  };


  const articleDataBad = {
    title: "The Art of Coding Consistency: Ensuring Uniformity in Your Projects",
    subtitle: "Why Consistency Matters in Software Development",
    img: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg",
    type: "IT",
    blocks: [
      {
        id: "1",
        type: "TEXT",
        title: "Introduction"
      },
      {
        id: "2",
        type: "IMAGE",
        src: "https://res.cloudinary.com/dxs7prlcr/image/upload/v1685005716/Big-tasty_xjwu5o.jpg",
        title: "The Beauty of Consistency"
      },
      {
        id: "3",
        type: "VIDEO",
        src: "https://www.youtube.com/watch?v=sJbexcm4Trk&ab_channel=Cyberpunk2077",
        title: "Watch the Video: The Power of Coding Consistency"
      },
      {
        id: "4",
        type: "CODE",
        code: "console.log('Hello, world!');",
        title: "Implementing Coding Consistency"
      },
      {
        id: "5",
        type: "TEXT",
        paragraphs: [
          "Coding consistency is not just about aesthetics; it goes far beyond that.",
          "By ensuring that all your links, variables, and naming conventions follow a uniform pattern, you are essentially creating a roadmap for developers who work on your project.",
          "This roadmap simplifies the development process and reduces the likelihood of introducing errors or misunderstanding in the codebase."
        ],
        title: "The Benefits of Consistency"
      }
    ]
  };

describe("Test create article", () => {
    connectMongo()

      test("should return userData with 201", async () => {
        await registerTestUser()
        const { body} = await loginTestUser()

        const { statusCode} = await request(app).post(`/api/articles/create`).set('Authorization', `Bearer ${body.userData.accessToken}`).send(articleData);

        expect(statusCode).toBe(201);
      });


      
      test("bad request ", async () => {
        await registerTestUser()
        const { body} = await loginTestUser()

        const { statusCode} = await request(app).post(`/api/articles/create`).set('Authorization', `Bearer ${body.userData.accessToken}`).send(articleDataBad);

        expect(statusCode).toBe(400);
      });

})