const express = require('express');
const router = express.Router();
const { getPopularMovies, addFavorite } = require('../controllers/movies'); 


router.get('/movies', getPopularMovies);


router.post('/favorites', addFavorite);

module.exports = router;

