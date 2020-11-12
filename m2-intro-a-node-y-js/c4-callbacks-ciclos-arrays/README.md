# Algunos temas para repasar

- Como era eso del `process.argv[3]` 🤯
- Los arrays son uno de los tipos de datos más comunes en programación.
- Repasemos el `for()`
- Hablemos de **callbacks**.

# Repaso

## Callbacks

Un callback es una función que se pasa como parámetro. Esa función no se ejecuta en el momento, se ejecuta cuando es necesario.

```javascript
let unCallback = () => console.log('Ejecutando el callback');
let otroCallback = () => console.log('Ejecutando el otro callback');

let otraFuncion = (callback) => callback();
```

## Métodos de arrays

### Map

Toma un array lo recorre y devuelve un nuevo array modificado. No cambia el original.

### Filter

Toma un array lo recorre y devuelve un nuevo array con los elementos que cumplan la condición que le demos. No cambia el original.

### Reduce

Toma un array lo recorre y devuelve un único valor en función de la operación que le demos. No cambia el original.

### forEach()

Recorre el array y ejecuta el código que le programemos. Podemos pensarlo como una versión moderna del `for`.


## for ... of

Recorre arrays (no usa callbacks)

```javascript
for (let elem of array) {}

for (let unElemento of unArray) {
    console.log(unElemento);
}
```

### for in

Recorre objetos (no usa callbacks)

```javascript
let unObjeto = {
    titulo: "Practicar el switch",
    descripcion: "Entender para qué puedo usarlo",
    estado: "pendiente"
};

console.log('unObjeto.titulo ->', unObjeto.titulo);
console.log("unObjeto['titulo'] ->", unObjeto['titulo']);
console.log();


// for (let prop in object) {}
for (let propiedad in unObjeto) {
    console.log('Nombre de la propidad:', propiedad)
    console.log('Valor de la propidad:', unObjeto[propiedad]);
    console.log();
}
```

## El objeto Date

Nos permite crear fechas y manipularlas.

```javascript
let fechaActual = new Date();

let fechaPuntual = new Date(2020, 11, 25);

fechaActual.getDay(); // 3, hoy era miércoles (arranca desde 0 el domingo)
fechaActual.getDate(); // 11, hoy era día 11 del mes
fechaActual.getMonth(); // 10, hoy era noviembre (arranca desde 0 en enero)
fechaActual.getFullYear(); // 2020, hoy era 2020
```

## Manipulación de datos

A la hora de trabajar con estructuras de datos complejas, vamos a necesitar herramientas para extraer esa información de manera más sencilla.

## Destructuracion

Permite obtener datos de arrays y objetos de manera eficiente.

### De arrays

```javascript
let unArray = ['Tipos de datos', 'Funciones', 'Ciclos', 'Metodos de arrays', 'Destructuración'];
let [tipos, funciones] = array;

// También podemos usar espacios vacíos para saltar elementos
let [,,ciclos,,destrucuracion];
```

###  De objetos

```javascript
let unObjeto = {
    titulo: "Practicar el switch",
    descripcion: "Entender para qué puedo usarlo",
    estado: "pendiente"
};

let {titulo, descripcion} = unObjeto;

// También podemos cambiarle el nombre a variable creada
let {descripcion: desc} = unObjeto;
```

## Spread operator

Permiten esparcir los contenidos de un array o un objeto para incluirlos en otra variable u objeto.

```
...array

...objeto
```

##  Rest parameter

Hace lo invero del spread operator, toma uno o más valores y los transforma en un array.

Se usa en funciones y siempre debe ser el último argumento.

```
function (...params) {}
```