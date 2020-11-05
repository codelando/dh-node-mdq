// Crear un archivo sumar.js que 
// contenga una función llamada sumar, 
// la cual debe ser exportada al final del archivo. 
// Esta función deberá recibir 2 parámetros y retornar la suma de los mismos.

function sumar(num1, num2) {
    return num1 + num2;
    // Todo lo que venta después del return no se ejecuta
    console.log('Estoy en sumar');
}

module.exports = sumar;