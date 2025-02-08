import express from 'express';
import { deleteProducts, getProducts, insertProducts, updateProducts } from '../controller/product.controller.js';
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();


router.post('/', insertProducts);

router.delete('/:id', deleteProducts);

router.get('/', getProducts);

//put = update all methods, patch = partial update
router.put('/:id', updateProducts);


//router.put('/:id', protectRoute, updateProducts);   !!!!!!!!!!!!!!!!!


export default router;
