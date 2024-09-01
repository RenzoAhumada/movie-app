
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';


export const getMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};


export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/movies/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};


export const addFavorite = async (movie) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/favorites`, movie);
    return response.data;
  } catch (error) {
    console.error('Error adding favorite:', error);
    throw error;
  }
};


export const getFavorites = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/favorites`);
    return response.data;
  } catch (error) {
    console.error('Error fetching favorites:', error);
    throw error;
  }
};
