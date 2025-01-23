const express = require("express");
const productsController = require("../controllers/products.controller");

const productsRoutes = express.Router();

productsRoutes.get("/", productsController.getAllProducts);
productsRoutes.post("/", productsController.createProduct);
productsRoutes.patch("/:id", productsController.updateProduct);
productsRoutes.delete("/:id", productsController.deleteProduct);

module.exports = productsRoutes;
