import express, { Express } from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRouter } from './routes/api';

dotenv.config();
const app: Express = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';
app.use(logger(formatsLogger));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use(express.static('public'));

app.use('/api/auth', authRouter);

export default app;
