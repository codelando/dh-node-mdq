// Modulos
const express = require('express');
const app = express();
const methodOverride = require('method-override');

// Configuración
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Formularios
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// Rutas
const mainRouter = require('./routes/mainRouter');
const usersRouter = require('./routes/usersRouter');

app.use('/', mainRouter);
app.use('/users', usersRouter);

// Iniciamos el servidor
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });