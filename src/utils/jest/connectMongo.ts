import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

export const connectMongo = () => {
    beforeAll(async () => {
        const mongoServer = await MongoMemoryServer.create();
        process.env.testEnabled = 'true'
        await mongoose.connect(mongoServer.getUri());
      });

      afterAll(async () => {
        await mongoose.disconnect();
        process.env.testEnabled = 'false'
        await mongoose.connection.close();
      });
}