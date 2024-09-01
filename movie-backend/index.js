const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const favoritesRoutes = require('./routes/favotires');

dotenv.config();

const app = express();


connectDB();


app.use(express.json());


app.use('/api', require('./routes/favotires'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
