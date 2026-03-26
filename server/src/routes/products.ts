import { Router } from 'express';
import { 
  getAllProducts, 
  getProductById, 
  getProductsByCategory,
  getCategories 
} from '../controllers/products';

const router = Router();

router.get('/', getAllProducts);
router.get('/categories', getCategories);
router.get('/category/:category', getProductsByCategory);
router.get('/:id', getProductById);

export default router;
