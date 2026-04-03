import express from 'express'
import postRouter from './routes/postRouter.ts'
import commentRouter from './routes/commentRouter.ts'
import { notFoundHandler, errorHandler } from './errorHandler.ts'
import cors from 'cors'

const app = express()
app.use(express.json())

app.use(
    cors({
        origin: 'http://localhost:5173',
    })
)

app.use('/posts', postRouter)
app.use('/comments', commentRouter)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
