const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/movies', async (req, res) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
      params: {
        api_key: process.env.TMDB_API_KEY,
        language: 'en-US',
        page: 1
      }
    });
    res.json(response.data.results);
  } catch (error) {
    console.error("Error fetching movies from TMDb:", error);
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

module.exports = router;