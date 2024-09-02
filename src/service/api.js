import axios from 'axios';

export const getMovies = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/movies');
    return response.data;
  } catch (error) {
    console.error("Error al traer películas:", error);
    return [];
  }
};

export const getFavorites = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/favorites');
    return response.data;
  } catch (error) {
    console.error("Error al traer películas favoritas:", error);
    return [];
  }
};

export const addFavorite = async (movie) => {
  try {
    const response = await axios.post('http://localhost:5000/api/favorites', movie);
    return response.data;
  } catch (error) {
    console.error("Error al agregar a favoritos:", error);
    throw error;
  }
};


