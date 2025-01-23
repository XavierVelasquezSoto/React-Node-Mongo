const ProductModel = require("../models/product.model");

const productsController = {};

productsController.getAllProducts = async (req, res) => {
  try {
    const allProducts = await ProductModel.find();
    return res.json(allProducts);
  } catch (error) {
    console.log("products" + allProducts);
    return res.json({ error: "Error reading database" + error });
  }
};

productsController.createProduct = async (req, res) => {
  const productInfo = req.body;
  const newProduct = new ProductModel({ ...productInfo });
  try {
    await newProduct.save();
    const allProducts = await ProductModel.find();
    return res.json(allProducts);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

productsController.updateProduct = async (req, res) => {
  const { id } = req.params;
  const newInfoProduct = req.body;

  try {
    const productToUpdate = await ProductModel.findById(id);
    if (!productToUpdate) {
      return res.json({ error: "Product not found" });
    }
    await ProductModel.updateOne({ _id: id }, { $set: { ...newInfoProduct } });
    const allProducts = await ProductModel.find();
    return res.json(allProducts);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

productsController.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const productToDelete = await ProductModel.findById(id);
    if (!productToDelete) {
      return res.json({ error: "Product not found" });
    }
    await ProductModel.deleteOne({ _id: id });
    const allProducts = await ProductModel.find();
    return res.json(allProducts);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

module.exports = productsController;
