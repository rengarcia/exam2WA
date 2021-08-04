import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import config from './config/config';

import computerRouter from './app/routes/computer.routes';

const app = express();

//settings
app.set("port", config.PORT);

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended:false }));
app.use(express.json());

//routes
app.use("/", computerRouter);

export default app;