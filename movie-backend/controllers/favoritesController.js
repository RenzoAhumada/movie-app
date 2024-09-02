const Movie = require('../models/movie');
///Controladores de favoritos

const addFavorite = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: 'Error al agregar la película a favoritos', error });
  }
};


const getFavorites = async (req, res) => {
  try {
    const favorites = await Movie.find({ favorite: true });
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las películas favoritas', error });
  }
};

module.exports = { addFavorite, getFavorites };
