# Algunos temas para repasar

- Dejé algunas notas adicionales en el readme del día 2
- Los tipos de datos y JS como lenguaje basado en objetos
- Es bueno que investiguen las posibilidades de cada tipo de dato
- Las funciones pueden usarse dentro de otras funciones
- Practiquen todo por su cuenta y prueben las cosas


- Ejemplos de Cheatsheets
- https://repl.it/@lando_dh/ProgramacionCeroClaseUno#main.js
- https://repl.it/@lando_dh/ProgramacionCeroClaseDos#main.js

# Repaso
- JSON y su utilidad
- Repaso de objetos literales, métodos y propiedades
- Arrays y Objetos Literales son los tipos de datos más comunes

## JSON

Javascript Object Notation. Es básicamente un tipo de datos de JS escrito en formato de texto.

```javascript
JSON.parse(jsonString) // Convierte de JSON a algún tipo de dato de JS
JSON.stringify(jsDataType) // Convierte de algún tipo de dato de JS a JSON
```

## Métodos de strings

Los strings para Javascript son básicamente arrays de caracteres.

```javascript
string.length; // Longitud del string
string.indexOf('otroString'); // Índice de la primera ocurrencia del subtring o -1
string.slice(principio, fin); // Devuelve una porción del string original
string.trim(); // Quita los espacios antes y después del string. Útil para validación
string.split(separador); // Devuelve un array, usando el separador que le pasemos
string.replace(busqueda, reemplazo); // Devuelve un nuevo string con el valor reemplazado
string.repeat(numero) // Repite el string tantas veces como le digamos
```

Por lo general los métodos de los strings no modifican el string original.

## Objetos Literales

```javascript
let objetoLiteral = {
    propiedad: 'Valor',
    otraPropiedad: 'Nueva',
    metodo: function() { 
        return 'Vieja forma';
    },
    otroMetodo() {
        return this.otraPropiedad + ' forma';
    }
}

objetoLiteral.propiedad // Valor
objetoLiteral.otroMetodo() // Nueva forma
```

Funciones constructoras

```javascript
function Auto(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

let miAuto = new Auto();
```

## Arrow Functions

Son por definicion funciones anónimas.

``` let multiplicar = function (num1, num2) { return num1 * num2 } ```

No necesita la palabra reservada function

```(val) => { return ... }```

Si tenemos un único parámetro, no necesita los paréntesis

```val => { return ... }```

Si su única línea es la que retorna un valor, no necesitamos ni el return ni las llaves

```val => resultado```

## Condicionales (If ternario, Switch)

### If ternario

Es un if abreviado. Solo tiene los bloques de if y else. El bloque de else es obligatorio.

```
condicion ? codigo si es verdadera : codigo si es falsa;
edad > 18 ? 'Es mayor de edad' : 'Es menor de edad';
```

### Switch

Es bueno cuando queremos evaluar múltiples posibilidades de un mismo valor.

Los casos se pueden agrupar y si no escribimos el `break` permitimos que múltiples casos se ejecuten.

```
switch(expresion) {
    case valor1:
        ...
        break;
    case valor2:
    case valor3:
        ...
        break
    default:
        ...
        break    
}
```

## Ciclos I (For)

```
for(inicio; condición de fin; modificador) {

}
```

## Ciclos (While, Do-While)

```
while(condicion es verdadera) {
    ...
}
```

Parecido al `while()` con la diferencia de que nuestro código se ejecutará como mínimo una vez.

```
do {
    ...
} while (condicion es verdadera)
```

# Para la app de tareas


## El objeto process de Node

`process` es un objeto global que nos provee Node que nos da información y control sobre la actual ejecución de Node. Al ser global no necesitamos utilizar `require()` para acceder a él.
Más info [aquí](https://nodejs.org/api/process.html).

Una de las cosas que nos da el objeto `process` es la lista de argumentos con los que se ejecutó nuestra aplicación a través de la propiedad `argv`.

Si ejecutamos node de la siguiente manera: `node app.js uno dos tres`, `process.argv` contendrá lo siguiente:

```
0: /directorio/del/ejecutable/de/node
1: /path/hacia/el/script/actual.js
2: uno
3: dos
4: tres
```