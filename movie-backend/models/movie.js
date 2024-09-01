const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  movieId: {
    type: String,
    required: true,
    unique: true
  },
  release_date: String,
  poster_path: String,
  overview: String,
  vote_average: Number,
});

module.exports = mongoose.model('Movie', movieSchema);