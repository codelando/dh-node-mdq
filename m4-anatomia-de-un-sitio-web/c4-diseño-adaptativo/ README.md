# Modelo de caja 

Habla de cómo se componen los elementos en HTML. De adentro hacia afuera tenemos:

- width
- height
- padding
- border
- margin

Para cada los últimos tres tenemos propiedades abreviadas o bien podemos establecer un valor para cada costado: top, right, bottom, left.

Para hacer que los valores del padding y del border se incluyan en el ancho de la caja, usamos:

- box-sizing: border-box;


# Elementos de línea y de bloque

Con la propiedad display podemos controlar cómo se muestran los elementos.

- display
    - inline
    - block
    - inline-block
    - none (elemento oculto)

# Viewport

`<meta name="viewport" content="width=device-width, initial-scale=1.0">`

## Medidas absolutas

- px

## Medidas relativas

- %
- vh
- vw
- em (no recomendada)
- rem (recomendada)

## Media queries

- mobile-last
- mobile-first

`@media (min-width: 768px) and (max-width: 1024px) { ... }`