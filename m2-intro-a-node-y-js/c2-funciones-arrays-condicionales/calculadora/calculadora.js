// Crear un archivo calculadora.js en el cual deberemos requerir los cuatros archivos hechos con anterioridad.

const sumar = require('./operaciones/sumar');
const restar = require('./operaciones/restar');
const dividir = require('./operaciones/dividir');

console.log('Resulado de sumar', sumar(12,232));
console.log('Resulado de restar', restar(12,232));
console.log('Resulado de dividir', dividir(12,0));