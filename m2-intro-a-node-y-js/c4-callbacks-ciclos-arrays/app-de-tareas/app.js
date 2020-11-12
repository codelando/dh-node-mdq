const tareas = require('./tareas');

let accion = process.argv[2];
let parametro = process.argv[3];

// 1. Si no llega párametro, que por defecto se listen las tareas

// 2. Recorrer el array con un for y listar de la siguiente manera:
// Titulo - Estado

switch (accion) {
    case undefined:
    case 'l':
    case 'listar':
        tareas.listar();
        break;
    case 'detalle':
        tareas.detalle(parametro);
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