const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  releaseDate: String,
  overview: String,
  posterPath: String,
  favorite: { type: Boolean, default: false }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;