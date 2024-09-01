const express = require('express');
const router = express.Router();
const { addFavorite, getFavorites } = require('../controllers/favoritesController');


router.post('/favorites', addFavorite);

router.get('/favorites', getFavorites);

module.exports = router;