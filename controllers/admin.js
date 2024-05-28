
const Product = require('../models/product');

exports.postAddProduct = (req, res, next) => {
  const { title, price, description, imageUrl } = req.body;
  const product = new Product({ title, price, description, imageUrl });
  product.save()
    .then(result => {
      console.log('Created Product');
      res.status(201).send({ message: 'Product created successfully' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An error occurred' });
    });
};

// Controller to fetch all products
exports.getProducts = (req, res, next) => {
  Product.find()
    .then(products => {
      res.status(200).json(products);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while fetching products' });
    });
};

//Controller to delete product

// Controller to delete a product
// exports.deleteProduct = (req, res, next) => {
//   const productId = req.params.productId;
//   Product.findByIdAndDelete(productId)
//     .then(result => {
//       if (result) {
//         res.status(200).send({ message: 'Product deleted successfully' });
//       } else {
//         res.status(404).send({ error: 'Product not found' });
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send({ error: 'An error occurred while deleting the product' });
//     });
// };
// Controller to delete a product
exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  Product.findByIdAndDelete(productId)
    .then(result => {
      if (result) {
        res.status(200).send({ message: 'Product deleted successfully' });
      } else {
        res.status(404).send({ error: 'Product not found' });
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An error occurred while deleting the product' });
    });
};

//Controller for Update

// Controller to update a product
//const Product = require('../models/Product'); // Import your Product model

//const Product = require('../models/Product'); // Import your Product model

exports.updateProduct = (req, res, next) => {
  const productId = req.params.productId.trim(); // Trim the productId
  const { title, price, description, imageUrl } = req.body;

  Product.findByIdAndUpdate(productId, { title, price, description, imageUrl }, { new: true })
    .then(updatedProduct => {
      if (!updatedProduct) {
        return res.status(404).send({ error: 'Product not found' });
      }
      res.status(200).send({ message: 'Product updated successfully', product: updatedProduct });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: 'An error occurred while updating the product' });
    });
};

