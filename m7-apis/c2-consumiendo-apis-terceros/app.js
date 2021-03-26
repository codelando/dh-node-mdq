// Modulos
const express = require('express');
const app = express();
const methodOverride = require('method-override')
const cors = require('cors')

// Configuración
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Middleware
const moneyExchangeMiddleware = require('./middlewares/moneyExchangeMiddleware')
app.use(cors())
app.use(moneyExchangeMiddleware)

// Rutas
const productRouter = require('./routes/productRoutes')
const dashboardRouter = require('./routes/dashboardRoutes')
const apiRouter = require('./routes/apiRoutes')
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) => res.redirect('/products'));
app.use('/products', productRouter);
app.use('/dashboard', dashboardRouter);
app.use('/api', apiRouter);
app.use('/user', userRoutes);

// Iniciamos el servidor
app.listen(3000, () => { console.log('Servidor escuchando en el puerto 3000') });