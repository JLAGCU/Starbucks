import { Router } from 'express';
import * as productController from '../controllers/productController';

const router = Router();

// Route to get a list of all products
router.get('/products', productController.getAllProducts);

// Route to get a single product by its ID
router.get('/products/:id', productController.getProductById);

// Route to create a new product
router.post('/products', productController.createProduct);

// Route to update an existing product
router.put('/products/:id', productController.updateProduct);

// Route to delete an existing product
router.delete('/products/:id', productController.deleteProduct);

export default router;
