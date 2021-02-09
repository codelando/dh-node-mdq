// Modulos
const express = require('express');
const app = express();

// Rutas
const mainRouter = require('./routes/mainRouter');
const productsRouter = require('./routes/productsRouter');

app.use('/', mainRouter);
app.use('/productos', productsRouter);

// Iniciamos el servidor
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });