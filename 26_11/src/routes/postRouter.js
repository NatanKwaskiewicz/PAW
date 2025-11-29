import { Router } from 'express';
import { getPosts,
    getOnePost,
    createPost,
    updatePostPut,
    updatePostPatch,
    deletePost
} from "../controllers/postController.js";

const router = new Router();

router.get('/', getPosts);
router.get('/:id', getOnePost);
router.post('/', createPost);
router.put('/:id', updatePostPut);
router.patch('/:id', updatePostPatch);
router.delete('/:id', deletePost);

export default router;