const path = require('path');
const express = require('express');
const app = express();

// Configuro el directorio de recursos estáticos
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
})

// Levantamos el servidor
app.listen(3000, () => { 
    console.log('-----------------------------------------------')
    console.log('¡Todo joya! Ya podés ir a http://localhost:3000');
    console.log('-----------------------------------------------')
})