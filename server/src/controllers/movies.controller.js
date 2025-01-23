const MovieModel = require("../models/movie.model");

const moviesController = {};

moviesController.getAllMovies = async (req, res) => {
  try {
    const allMovies = await MovieModel.find();
    return res.json(allMovies);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

moviesController.createMovie = async (req, res) => {
  const movieInfo = req.body;
  const newMovie = new MovieModel({ ...movieInfo });
  try {
    await newMovie.save();
    const allMovies = await MovieModel.find();
    return res.json(allMovies);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

moviesController.updateMovie = async (req, res) => {
  const { id } = req.params;
  const newInfo = req.body;

  try {
    const movieToUpdate = await MovieModel.findById(id);
    if (!movieToUpdate) {
      return res.json({ error: "Movie not found" });
    }
    await MovieModel.updateOne({ _id: id }, { $set: { ...newInfo } });
    const allMovies = await MovieModel.find();
    return res.json(allMovies);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

moviesController.deleteMovie = async (req, res) => {
  const { id } = req.params;

  try {
    const movieToDelete = await MovieModel.findById(id);
    if (!movieToDelete) {
      return res.json({ error: "Movie not found" });
    }
    await MovieModel.deleteOne({ _id: id });
    const allMovies = await MovieModel.find();
    return res.json(allMovies);
  } catch (error) {
    return res.json({ error: "Error reading database" + error });
  }
};

module.exports = moviesController;
