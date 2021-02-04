// Modulos
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
const auth = require('./middlewares/auth');

// Configuración
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Sessiones y cookies
app.use(session({
    secret: 'Mi sitio',
    resave: false, // no vuelve a guardar si no hay cambios
    saveUninitialized: true, // guarda sessiones aunque todavía no haya datos
}));

app.use(auth);

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