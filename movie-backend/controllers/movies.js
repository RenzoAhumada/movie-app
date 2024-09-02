const axios = require('axios');

exports.getMovies = async (req, res) => {
  try {
    const apiKey = process.env.TMDB_API_KEY;
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);
    res.json(response.data.results); 
  } catch (error) {
    console.error('Error al obtener las películas de TMDb:', error);
    res.status(500).json({ message: 'Error al obtener las películas' });
  }
};