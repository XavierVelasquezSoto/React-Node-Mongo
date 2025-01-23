const express = require("express");
const moviesController = require("../controllers/movies.controller");

const movieRoutes = express.Router();

movieRoutes.get("/", moviesController.getAllMovies);
movieRoutes.post("/", moviesController.createMovie);
movieRoutes.patch("/:id", moviesController.updateMovie);
movieRoutes.delete("/:id", moviesController.deleteMovie);

module.exports = movieRoutes;
