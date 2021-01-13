// Modulos
const express = require('express');
const app = express();

// Configuración
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Rutas
const mainRouter = require('./routes/mainRouter');
app.use('/', mainRouter);

// Iniciamos el servidor
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });