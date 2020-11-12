const fs = require('fs');
const path = require('path');

const pathTareas = path.join(__dirname,'tareas.json');


function leerTareas() {
    let tareasJSON = fs.readFileSync(pathTareas, 'utf-8');
    
    return JSON.parse(tareasJSON);
}

// Escribir la función guardarTareas
// 1. Va a recibir un array de tareas
// 2. Va a convertir ese array en JSON
// 3. Va a guardar ese JSON en el archivo tareas.json
function guardarTareas(tareas) {
    let tareasString = JSON.stringify(tareas, null, ' ');

    fs.writeFileSync(pathTareas, tareasString);
}

let tareas = {
    listar() {
        let tareas = leerTareas();
        // for(let i = 0; i < tareas.length; i++){
        //     console.log('♦ ' + tareas[i].titulo + ' - ' + tareas[i].estado);
        // }
        
        // for(let tarea of tareas) {
        //     console.log('♦ ' + tarea.titulo + ' - ' + tarea.estado);
        // }
        
        // Implementar el forEach
        tareas.forEach(
            tarea => console.log('♦ ' + tarea.titulo + ' - ' + tarea.estado)
        );
    },
    detalle(indice) {
        let tareas = leerTareas();
        let tarea = tareas[indice];
    
        console.log(tarea.titulo);
        console.log('~'.repeat(tarea.titulo.length));
        console.log(tarea.descripcion);
    },
    crear(tarea) {
        // Leer todas las tareas
        // Agregar la nueva tarea al array
        // Guardar el nuevo array
        let tareas = leerTareas();
        tareas.push(tarea);
        guardarTareas(tareas);
    }
}

module.exports = tareas;