import axios from 'axios';

///Llamadas desde api para que se comuniquen front y back, ya que front se hostea desde localhost 5173
///Llama a las api de back que estan alojadas en localHost5000

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


