# Nombre en la programación
- camelCase
- sin acentos
- sin espacios

# Temas

## Variables 
- var
- let
- const

En el pasado `var` era la única manera de declarar una variable. `let` y `const` se diferencian de `var` en que una vez que las declararmos no podemos volver a declararlas. Por otro, lado ambas solo estarán disponibles en el scope donde fueron declaradas. Por lo general podemos decir que el scope cambia cada vez que abrimos una llave `{}`.

## Tipos de datos

Javascript es un lenguaje basado en objetos, eso quiere decir que cada tipo de dato es un objeto especializado. En ese sentido, según el tipo de dato, JS nos proveerá diferentes métodos y propiedades.

Tenemos los tipos más comunes:

- number
- string
- boolean
- array
- object 

También tenemos tipos de datos especiales:

- NaN
- null
- undefined

`typeof` nos permite saber el tipo de datos de una variable.

Hay también funciones nativas de JS que nos permiten convertir tipos de datos, como `Number()` o `parseInt()`.

## Operadores

### Asignacion

Asignan el valor a una variable.

let edad = 40;

### Aritméticos

Nos permiten hacer operaciones matemáticas

```javascript
10 + 15 //---> Suma
10 - 15 //---> Resta
10 * 15 //---> Multiplicación
10 / 15 //---> División
15++    //---> Incremento de uno en uno: 15 + 1
15--    //---> Decremento de uno en uno: 15 - 1
15 % 5  //---> Módulo. El resto obtenido de dividir 15 entre 5: 0
15 % 2  //---> Módulo. El resto obtenido de dividir 15 entre 2: 1
```

### Comparación

De comparación simple (compara solo el valor)

```javascript
10 == 15 //---> Igualdad
10 != 15 //---> Desigualdad
```

De comparación estricta (compara el valor y el tipo de dato)

```javascript
10 === 15 //---> Estrictamente igual (mismo valor y tipo de dato)
10 !== 15 //---> Compara si los operandos no son iguales y/o no del mismo tipo
```

De relación

```javascript
15 > 10  //---> Mayor que...
15 >= 10  //---> Mayor igual que...
15 < 10  //---> Menor que...
15 < 10  //---> Mayor igual que...
```

De concatenación (une strings, si hay otros tipos de datos, los convierte en strings)

```javascript
'Hola' + ' ¿cómo están?' // 'Hola' + ' ¿cómo están?'

'Mi número es: ' + '32' // Mi número es: 32
```


### Lógicos

Permiten combinar valores booleanos y su resultado a la vez también es un booleano

```javascript
// && AND - Todas las condiciones deben cumplirse para devolver true
(19 >= 18) && (19 <= 21); // true

// || OR - Cualquier condición debe cumplirse para devolver true
('Pedro' == 'Juan') || ('Hernández' == 'Hernández'); // true

// ! NOT - También podemos negar una condición.
let color = 'Verde';
let noEsRojo = !(color == 'Rojo');
```

## Condicionales

Nos permiten ejecutar instrucciones si se cumplen las condiciones que esperamos

```javascript
let edadPersona = 20;

// Si la edad de la persona es mayor o igual a 18, se ejecuta el cógigo entre llaves {}
if (edadPersona >= 18) {
 console.log(nombrePersona + ' es mayor de edad.');
}

// Podemos tener código alternativo para el caso de que nuestra condicion no se de.
if (edadPersona <= 18) {
 console.log(nombrePersona + ' es menor de edad.');
// Si la edad no es menor o igual a 18, se va a ejecutar este otro código
} else {
 console.log(nombrePersona + ' es mayor de edad.'); 
}

// También podemos escribir más de una condición
if (edadPersona >= 21) {
 console.log(nombrePersona + ' es mayor de edad.');
// Como la edad es 19, se va a ejecutar esta parte
} else if (edadPersona >= 18) {
 console.log(nombrePersona + ' es casi mayor de edad.');
} else {
 console.log(nombrePersona + ' es menor de edad.'); 
}
```

## Funciones

Las funciones nos permiten encapsular funcionalidad que vamos a querer reutilizar en el futuro.

La primera parte es la declaración. Aquí decimos qué va a hacer nuestra función cada vez que la ejecutemos.

```javascript
function saludarConsola() {
  console.log('¡Hola mamá, estoy programando!');
}
```

Ahora que nuestra función está declarada, podemos llamarla.

```javascript
saludarConsola();

// ¡Todas las veces que queramos!
saludarConsola();
saludarConsola();
saludarConsola();
```

Las funciones pueden tener parámetros, esos van entre los paréntesis y separados por comas si son más de uno.

Podemos imaginar los parámetros como variables que solo van a funcionar dentro de la función.

```javascript
function saludarNombre(nombre) {
  console.log('¡Hola ' + nombre + '!')
}

saludarNombre('María');
```

Las funciones, además de aceptar parámetros, pueden devolver valores, eso lo hacemos con el `return`. Hay que tener en cuenta que `return` no solo devuelve un valor, también corta la ejecución de la función

```javascript
function restar(num1, num2) {
  return num1 - num2; // devuelve el valor y sale de la función
  console.log('Estoy haciendo una resta'); // no se ejecuta
}
```

Normalmente vamos a asignar el valor devuelto por la función a una variable.

```javascript
let resultadoResta = restar(124, 58);
```

Las funciones también pueden ser anónimas, es decir, no tener nombre. Ese tipo de funciones suele asignarse a una variable y cuando hacemos eso, decimos que la función es expresada.

```javascript
let restar = function(num1, num2) {
  return num1 - num2;
}
```

## Arrays

Los arrays nos permiten guardar múltiples datos en un un solo lugar. 

- Para indicar que es un array usamos los corchetes []
- Cada uno de los datos lo separamos con una coma (,)

```javascript
let misAmigos = ['Juan', 'Gabriela', 'Jorge', 'Marcela'];
```

Podemos guardar cualquier tipo de datos.

```javascript
let misDatos = ['Martes', 18, true];
```

Cada uno de los datos tiene un índice y ese índice empieza en 0

```javascript
let misNumeros =  [23, 54, 34, -56, 103];
//                  0   1   2    3    4
```

Podemos pedirle a JavaScript un dato específico del array usando los índices.

Si por ejemplo queremos el tercer nombre del array de misAmigos pedimos el índice 2 (porque 0, 1, 2).

```javascript
misAmigos[2]); // Jorge
misDatos[0]); // Martes
```

También podemos saber cuántos elementos tiene un array con la propiedad length

```javascript
misNumeros.length // 4;
```

Podemos agregar un elemento a un array con el método `push()`.

```javascript
misAmigos.push('Javier');
```

Podemos quitar el último elemento con el método `pop()`. El método `pop()` no solo quita el último elemento, también lo devuelve para que podamos guardarlo.

```javascript
let ultimoAmigo = misAmigos.pop(); // Javier
```

También tenemos:

- `shift()` --> Sacamos del principio
- `unshift()` --> Agregamos al principio
- `indexOf()` --> Devuelve el índice del primer elemento que coincida, `-1` de lo contrario
- `lastIndexOf()` --> Devuelve el índice del último elemento que coincida, `-1` de lo contrario
- `includes()` --> Devuelve `true` si encuentra un elemento, `false` de lo contario
- `find()` --> Devuelve el elemento si lo encuentra, `undefined` en caso contrario
- `join()` --> Une los elemento del array en un string, puede recibir un separador como parámetro.
- `slice()` --> Devuelve una copia de una parte del array
- `splice()` --> Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.