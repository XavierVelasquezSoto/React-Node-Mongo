const mongoose = require("mongoose");
const ProductScheme = require("../schemes/product.scheme");

const ProductModel = mongoose.model("Product", ProductScheme);

module.exports = ProductModel;
