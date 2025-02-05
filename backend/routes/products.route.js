import express from 'express';
import mongoose from 'mongoose';
import { deleteProducts, getProducts, insertProducts, updateProducts } from '../controller/product.controller.js';
const router = express.Router();


router.post('/', insertProducts);

router.delete('/:id', deleteProducts);

router.get('/', getProducts);

//put = update all methods, patch = partial update
router.put('/:id', updateProducts);

export default router;
