// Consumir el archivo de tareas.json
// 1. Requerir el módulo de FS
// 2. Utilizar el método .....sync para leer archivo
const fs = require('fs');
const path = require('path');

// let tareasJSON = fs.readFileSync(path.join(__dirname,'tareas.json'), 'utf-8');

// 3. Utilizar el método JSON..... para convertirlo a un tipo de datos de JS.
// 4. Imprimir en consola el resultado.
// let tareas = JSON.parse(tareasJSON);

// 5. Crear una función que lea las tareas
function leerTareas() {
    let tareasJSON = fs.readFileSync(path.join(__dirname,'tareas.json'), 'utf-8');
    
    return JSON.parse(tareasJSON);
}

// console.log(process.argv);
// Tambiém pueden usar yargs

// 6. Acceder al comando que nos paso el usuario
// 7. Si ese comando es 'listar' entonces liste las tareas

// Tomo la acción de los parámetros que envie el usuario
// https://nodejs.org/api/process.html
let accion = process.argv[2];

// Si NO se escribe ninguna palabra después del nombre del archivo, en la terminal deberá aparecer el texto: Atención - Tienes que pasar una acción.

switch (accion) {
    case 'listar':
        console.log(leerTareas());
        break;
    case undefined:
        console.log();
        console.log('¡Oiga! Necesito saber qué acción quiere realizar...');
        console.log();
        break;
    default:
        console.log();
        console.log('¡Oiga! No entiendo esa acción...');
        console.log();
        console.log('Las acciones disponibles son:');
        console.log();
        console.log('- listar');
        console.log();
        break;
}