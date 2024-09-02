import React, { useEffect, useState } from 'react';
import { getMovies, addFavorite } from '../service/api'; 
import MovieCard from './MovieCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  const handleAddFavorite = async (movie) => {
    try {
      await addFavorite(movie);
      alert(`${movie.title} ha sido agregada a tus favoritos`);
    } catch (error) {
      console.error('Error agregando a favoritos:', error);
    }

  };

    const handleFavoritesClick = () => {
        navigate('/favorites'); 
  };

  return (
    <div className="home-container">
      <h1>Lista de Películas</h1>
      <button onClick={handleFavoritesClick}>Mis Favoritos</button>   
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id}>
            <MovieCard movie={movie} />
            <button onClick={() => handleAddFavorite(movie)}>Agregar a Favoritos</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
