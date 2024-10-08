import React from 'react';
import Grid from '@mui/material/Grid';
import MovieCard from './MovieCard';

const MovieList = ({movies ,onMovieSelect}) =>{

  if (!Array.isArray(movies)) {
    console.error("Expected an array but got", movies);
    return null;

}
return (
  <Grid container spacing={3}>
    {movies.map(movie => (
      <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
        <MovieCard movie={movie} onClick={onMovieSelect} />
      </Grid>
    ))}
  </Grid>
);
};



export default MovieList;