// let accion = process.argv[2];

// let unObjeto = {
//     titulo: 'Un título',
//     desc: 'Una descripción',
//     temas: ['programación', 'metologías', 'habilidades blandas']
// }

// let temas = unObjeto.temas[2];

// console.log(temas);




// function escribirEnConsola() {
//     console.log('Estamos ejecutando el callback');
// }

// function ejecutarCallback(unaFuncion) {
//     unaFuncion()
// }

// ejecutarCallback(escribirEnConsola);


// ejecutarCallback(
//     () => console.log('La escribí en el momento')
// );


let array = ['Tipos de datos', 'Funciones', 'Ciclos', 'Metodos de arrays', 'Destructuración'];

let arrayEnMayusculas = array.map(
    elemento => elemento.toUpperCase()
);

let arrayMuchasPalabras = array.filter(
    function(elemento) {
        return elemento.split(' ').length > 1;
    }
);

let cantidadDeLetras = array.reduce(
    function(total, elemento) {
        return total + elemento.length;
    }, 0
);

array.forEach((elemento, indice) => console.log( 'En el índice ' + indice + ' hay: ' + elemento));


// array.reduce(callback, valorInicial)

// console.log('En mayusculas', arrayEnMayusculas);
// console.log('Muchas palabras', arrayMuchasPalabras);
// console.log('Cantidad de letras', cantidadDeLetras);