import { Router } from 'express';
import { getCategories,
        getOneCategory,
        createCategory,
        updateCategoryPut,
        updateCategoryPatch,
        deleteCategory
} from '../controllers/categoryController.js';

const router = new Router();

router.get('/', getCategories);
router.get('/:id', getOneCategory);
router.post('/', createCategory);
router.put('/:id', updateCategoryPut);
router.patch('/:id', updateCategoryPatch);
router.delete('/:id', deleteCategory);

export default router;