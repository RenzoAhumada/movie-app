const Movie = require('../models/movie');


const addFavorite = async (req, res) => {
  const { movieId, title, release_date, poster_path, overview, vote_average } = req.body;

  try {
    let movie = await Movie.findOne({ movieId });

    if (!movie) {
      movie = new Movie({ movieId, title, release_date, poster_path, overview, vote_average });
      await movie.save();
    }

    res.status(201).json(movie);
  } catch (error) {
    console.error('Error adding favorite:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};


const getFavorites = async (req, res) => {
  try {
    const movies = await Movie.find({});
    res.json(movies);
  } catch (error) {
    console.error('Error fetching favorites:', error.message);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { addFavorite, getFavorites };