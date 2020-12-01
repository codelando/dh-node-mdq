// 1. Los requires

// Requiero el módulo
const express = require('express');

// Lo ejecuto para obtener el objeto literal
const app = express();

// Requerimos path
const path = require('path');

// 2. Nuestra rutas

let homeResponse = (req, res) => {
    res.send('Bienvenida/o a nuestra página principal.');
}

// Respondemos a la ruta raiz con un mensaje
app.get('/', homeResponse);
app.get('/home', homeResponse);
app.get('/pagina-princial', homeResponse);

// Respondemos con un archivo HTML
app.get('/acerca-de', (req, res) => {
    let filePath = path.join(__dirname, '/views/about.html');
    res.sendFile(filePath);
});

// Atajamos todas las rutas que no existen
app.get('*', (req, res) => {
    res.send('¿Te perdiste?');
});

// 3. El servidor

// Iniciar el servidor
app.listen(3000, () => console.log('El servidor está corriendo en el puerto 3000.'));