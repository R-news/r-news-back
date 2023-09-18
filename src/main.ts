import express, { Express } from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();
const app: Express = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.get('/', (req, res) => {
    res.status(200).json({message: 'ok'})
  })

export default app

