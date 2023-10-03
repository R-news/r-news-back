import './utils/config/aliases';
import express, { Express } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import { articlesRouter, authRouter, serviceRouter, userRouter } from '@src/routes/api';
import { getEnvironmentVariables } from '@src/environments/environment';
import { errorMiddleware } from '@src/middlewares/errorMiddleware';



const app: Express = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: getEnvironmentVariables().urls.client }));

app.use(express.static('public'));

app.use('/api/service', serviceRouter);
app.use('/api/auth', authRouter);
app.use('/api/articles', articlesRouter);
app.use('/api/user', userRouter);

app.use(errorMiddleware);

export default app;
