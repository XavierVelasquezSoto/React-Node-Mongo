const mongoose = require("mongoose");
const MovieScheme = require("../schemes/movie.scheme");

const MovieModel = mongoose.model("Movie", MovieScheme);

module.exports = MovieModel;
