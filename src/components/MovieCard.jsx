import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const MovieCard = ({ movie, onClick }) => {
  return (
    <Card onClick={() => onClick(movie)}>
      <CardMedia
        component="img"
        height="140"
        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h6">{movie.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.release_date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;