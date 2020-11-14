let fs = require('fs'); // fileSystem
let path = require('path'); // path

let archivoTareas = path.join(__dirname, 'data/tareas.json');

function leerJSON() {
    if(fs.existsSync(archivoTareas)) {
        let datos = fs.readFileSync(archivoTareas, 'utf-8');
        return JSON.parse(datos);
    }

    return [];
}

function guardarJSON(datos) {
    let datosJson = JSON.stringify(datos, null, ' '); // null, ' ' le da formato al archivo
    fs.writeFileSync(archivoTareas, datosJson);
}

let tareas = {
    listar() {
        let tareas = leerJSON();
    
        tareas.forEach(function(tarea, indice) {
            console.log(++indice + ' ♦ ' + tarea.titulo + ' --> ' + tarea.estado);
        });
    },
    listarPorEstado(estado) {
        let tareas = leerJSON();
    
        let tareasPorEstado = tareas.filter(function(tarea) {
            return tarea.estado == estado;
        });
    
        if(tareasPorEstado) {
            tareasPorEstado.forEach(function(tarea) {
                console.log('♦ ' + tarea.titulo + ' --> ' + tarea.estado);
            });
        } else {
            console.log('No hay tareas con el estado:', estado);
        }
    },
    crear(tarea) {
        let tareas = leerJSON();
        tareas.push(tarea);
        guardarJSON(tareas);
    }
}

module.exports = tareas;