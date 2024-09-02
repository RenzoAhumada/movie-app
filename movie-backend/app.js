const express = require('express');
const mongoose = require('mongoose');
const moviesRoutes = require('./routes/movies'); // Archivo que contiene las rutas de películas

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Montando las rutas con el prefijo /api
app.use('/api', moviesRoutes);

// Conexión a MongoDB
mongoose.connect('tu-string-de-conexion', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB conectado con éxito'))
.catch(err => console.log('Error al conectar MongoDB:', err));

// Iniciar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
