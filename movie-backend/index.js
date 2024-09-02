const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors'); 
const favoritesRoutes = require('./routes/favorites');

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
}));

connectDB();

app.use(express.json());

app.use('/api', favoritesRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

