// Modulos
const express = require('express');
const app = express();
const methodOverride = require('method-override')

// Configuración
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));


// Rutas
const productRouter = require('./routes/productRoutes')
const dashboardRouter = require('./routes/dashboardRoutes')
const apiRouter = require('./routes/apiRoutes')

app.get('/', (req, res) => res.redirect('/products'));
app.use('/products', productRouter);
app.use('/dashboard', dashboardRouter);
app.use('/api', apiRouter);

// Iniciamos el servidor
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });