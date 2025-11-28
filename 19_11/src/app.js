import express from 'express';
import  postRouter from './routes/postRouter.js';
import categoryRouter from './routes/categoryRouter.js';
import commentRouter from './routes/commentRouter.js';

const app = express();
app.use(express.json());

app.use('/post', postRouter);
app.use('/category', categoryRouter);
app.use('/comment', commentRouter);

export default app;