let tareas = require('./tareas');

let accion = process.argv[2]; // Primer parámetro ingresado en la terminal
let parametros = process.argv.slice(3);

const ESTADO_INICIAL = 'pendiente';

switch (accion) {
    case undefined:
    case 'listar':
    case 'l':
        if (parametros.length > 0) {
            tareas.listarPorEstado(parametros[0]);
        } else {
            tareas.listar();
        };
        break;
    case 'crear':
        if(parametros.length > 0) {
            let tarea = {
                titulo: parametros[0],
                descripcion: parametros[1],
                estado: ESTADO_INICIAL
            }
            tareas.crear(tarea);
        } else {
            console.log('Debes escribir al menos un título para la tarea');
        }
        break;
    case 'detalle':
        // 
    default:
        console.log('No entiendo ese comando');
}

// tareas.listar();
// tareas.listarPendientes();

