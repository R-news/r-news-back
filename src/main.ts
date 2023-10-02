import express, { Express } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { articlesRouter, authRouter, userRouter } from './routes/api';
import { errorMiddleware } from 'middlewares/errorMiddleware';

const app: Express = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

app.use(express.static('public'));

app.use('/api/auth', authRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/user', userRouter);

app.use(errorMiddleware);

export default app;
