import { Router } from 'express'
import {
    getPosts,
    getOnePost,
    createPost,
} from '../controllers/postController.ts'

const router = Router()

router.get('/', getPosts)
router.get('/:id', getOnePost)
router.post('/', createPost)

export default router
