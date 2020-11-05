// Crear un archivo dividir.js que contenga una función llamada dividir, la cual debe ser
// exportada al final del archivo. Esta función deberá recibir 2 parámetros y retornar la
// división de los mismos. 
// Importante:
// a. Contemplar el escenario donde si alguno de los dos parámetros es cero, la
// función retornará "No se puede dividir por cero".

function dividir (num1, num2) {
    if (num2 == 0) {
        return "No se puede dividir por cero";
    } 
    
    return num1 / num2;
}

module.exports = dividir;