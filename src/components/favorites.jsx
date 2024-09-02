import React, { useEffect, useState } from 'react';
import { getFavorites } from '../service/api';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavorites();
      setFavorites(data);
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      {favorites.length === 0 ? (
        <p>No hay películas favoritas.</p>
      ) : (
        <div>
          {favorites.map(movie => (
            <div key={movie._id}>
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;


