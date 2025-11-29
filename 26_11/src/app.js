import express from 'express';
import  postRouter from './routes/postRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import commentRouter from './routes/commentRouter.js';
import { notFound, errorHandler } from './errorHandler.js';

const app = express();
app.use(express.json());

app.use('/post', postRouter);
app.use('/category', categoryRouter);
app.use('/comment', commentRouter);

app.get('/', (req, res) => {
    res.status(200).json({ content: 'main page' })
})

app.use(notFound);
app.use(errorHandler);

export default app;