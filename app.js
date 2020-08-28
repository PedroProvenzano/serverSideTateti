const express = require('express');
const app = express();

// Base de datos
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

// Middlewares

// Parser (para manejar archivos json)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Cors (para poder acceder desde otro dominio)
app.use(cors());

// Puerto
const port = process.env.PORT || 3000;

// Ruta de post
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('Bienvenido al servidor de tateti');
})

// Para conectar al DB
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Conectado correctamente con el DB');
})

app.listen(port, () => {
    console.log(`Servidor corriendo correctamente en puerto: ${port}`);
})