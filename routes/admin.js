const express = require('express')
const router = express.Router();
const adminController = require('../controllers/admin');
const path = require('path');

console.log("hello im from routes");
// Route to  add products
router.post('/add-product', adminController.postAddProduct);
// Route to fetch all products
router.get('/products', adminController.getProducts);
//Route to delete products
router.delete('/product/:productId', adminController.deleteProduct);
//Route to update
router.put('/product/:productId', adminController.updateProduct);

module.exports=router;