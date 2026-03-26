import { Router } from 'express';
import { createOrder, getOrderById, getAllOrders } from '../controllers/orders';

const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
router.get('/:id', getOrderById);

export default router;
