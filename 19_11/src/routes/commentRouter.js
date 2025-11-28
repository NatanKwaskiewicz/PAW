import { Router } from 'express';
import { getComments,
        getOneComment,
        createComment,
        updateCommentPut,
        updateCommentPatch,
        deleteComment
} from '../controllers/commentController.js';

const router = new Router();

router.get('/', getComments);
router.get('/:id', getOneComment);
router.post('/', createComment);
router.put('/:id', updateCommentPut);
router.patch('/:id', updateCommentPatch);
router.delete('/:id', deleteComment);

export default router;