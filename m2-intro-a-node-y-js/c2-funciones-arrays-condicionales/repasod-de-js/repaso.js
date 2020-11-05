// var se puede re-declarar
var otroNombre;
var otroNombre = '';

var otroNombre = 'Josefina';
var otroNombre = 'Joaquín';

// let y const no se pueden redeclarar
let nombre = 'Gabriel';
// let nombre = 'María'; // Va a dar error
console.log(nombre);


// constante de configuración, suele ponerse en MAYUSCULA
const EDAD_MAXIMA = 16;

console.log(EDAD_MAXIMA);

let string = 'siempre con comillas';
let number = 324 // siempre sin comillas
let decimal = 23.2 // siempre con punto el decimal
let array = [] // siempre con corchetes
let object = {
    firstName: 'John',
    lastName: 'Snow'
} // siempre con las llaves
let boolean = true; // también puede ser false

let isNull  = null; // valor nulo
let notDefined; // Esta variable es undefined

let miNumeroFavorito = 12; // Number

miNumeroFavorito = 'Doce'; // String


let suma = 10 + 35;
console.log('El resultado de la suma es:', suma);

suma = suma + 1;
console.log('El resultado de la suma es:', suma);
suma += 5;
console.log('El resultado de la suma es:', suma);
suma++;
console.log('El resultado de la suma es:', suma);


console.log();
if (10 === '10') {
    console.log('La condición se cumplió');
} else {
    console.log('La condición no se cumplió');
}

function calculoInes(num1, num2 = 100) {
    return num1 * 2 + 5 * num2;
}

console.log(calculoInes(45, 123));


console.log('Mi objeto', object);