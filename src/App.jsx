import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    if (query.trim() === '') return;

    const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
      params: {
        api_key: 'TU_API_KEY',
        query: query
      }
    });

    setMovies(response.data.results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} onMovieSelect={(movie) => console.log(movie)} />
    </div>
  );
}

export default App;
