import React, { useEffect, useState } from 'react';
import { getMovies } from './service/api';

const App = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await getMovies();
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {movies.length > 0 ? (
        movies.map(movie => (
          <div key={movie.id}>
            {movie.title}
          </div>
        ))
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default App;