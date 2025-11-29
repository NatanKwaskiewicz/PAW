import express from 'express';
import postRouter from './routes/postRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import commentRouter from './routes/commentRouter.js';
import { notFoundHandler, errorHandler } from './errorHandler.js';
import { connectMongo } from "../mongo/mongoDatabase.js";
import { accessLogger, errorLogger } from "../mongo/mongoLogger.js";

const app = express();
app.use(express.json());

connectMongo().catch((err) => {
    console.error('Error while connecting to Mongo:', err);
})

app.use(accessLogger);

app.use('/post', postRouter);
app.use('/category', categoryRouter);
app.use('/comment', commentRouter);

app.get('/', (req, res) => {
    res.status(200).json({ content: 'main page' })
})

app.use(notFoundHandler);
app.use(errorHandler);
app.use(errorLogger);

export default app;