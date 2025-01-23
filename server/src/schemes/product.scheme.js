const mongoose = require("mongoose");

const ProductScheme = mongoose.Schema(
  {
    name: String,
    descriptionProduct: String,
    price: Number,
  },
  {
    collection: "products",
  }
);

module.exports = ProductScheme;
