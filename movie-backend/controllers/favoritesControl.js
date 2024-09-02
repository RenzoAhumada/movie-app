const fs = require('fs');
const path = require('path');


const favoritesFilePath = path.join(__dirname, 'data', 'favorites.json');


const readFavorites = () => {
  const data = fs.readFileSync(favoritesFilePath);
  return JSON.parse(data).favorites;
};


const writeFavorites = (favorites) => {
  fs.writeFileSync(favoritesFilePath, JSON.stringify({ favorites }, null, 2));
};


app.get('/api/favorites', (req, res) => {
  const favorites = readFavorites();
  res.json(favorites);
});


app.post('/api/favorites', (req, res) => {
  const newFavorite = req.body;

  const favorites = readFavorites();


  const exists = favorites.some(movie => movie.id === newFavorite.id);
  if (!exists) {
    favorites.push(newFavorite);
    writeFavorites(favorites);
    res.status(201).json(newFavorite);
  } else {
    res.status(409).json({ message: 'La película ya está en favoritos' });
  }
});
