// routes/cart.js
import express from 'express';
import protect from '../middleware/authMiddleware.js';
import cartControllers from '../controller/cart.js';

const router = express.Router();

router.post('/add-to-cart', protect, cartControllers.addToCart);
router.get('/get-cart', protect, cartControllers.getCart);
// Add more cart-related routes as needed

export default router;
