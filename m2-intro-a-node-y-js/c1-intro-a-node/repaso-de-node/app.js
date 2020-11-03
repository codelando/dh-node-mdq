// Módulo nativo
// Pueden usar const, let o var
const fs = require('fs');

// Módulo de terceros
const chalk = require('chalk');

// Módulo propio
const users = require('./users');

// __dirname es la constante que nos dice el directorio donde está el achivo que es está ejecutando
const message = fs.readFileSync(__dirname + '/message.txt', 'utf-8');

console.log('Estoy en app.js');
console.log('');
console.log('Estoy parado en:', __dirname);
console.log('');
console.log(chalk.green.inverse(message));
console.log('');
console.log(chalk.red(users));