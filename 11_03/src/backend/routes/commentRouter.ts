import { Router } from 'express'
import {
    getComments,
    getCommentByPost,
    createComment,
} from '../controllers/commentController.ts'

const router = Router()

router.get('/', getComments)
router.get('/posts/:id', getCommentByPost)
router.post('/', createComment)

export default router
