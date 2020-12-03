# HTML

HTML nace como respuesta al problema de compartir documentos científicos, es por eso que la mayor parte de los elementos con los que arrancamos tienen que ver con la estructura de un documento de texto.

## Estructura básica

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Configuración del sitio aquí -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Contenido del sitio aquí -->
</body>
</html>
```

## Etiquetas, elementos y atributos

Por lo general un elemento tiene una etiqueta de apertura, una de cierre y contenido entre ellas.
`<h1>contenido</h1>`

Los elementos que no llevan contenido dentro, tienen una sola etiqueta.
`<br>`

Los elementos pueden tener propiedades y valores
`<h1 id="title" class="bigText">contenido</h1>`

## Elementos de linea y de bloque

- div
- span

## Elementos de texto
- Los titulares `h1 ... h6`
- Los párafos `p`
- El texto con énfacisis (itálica) `em`
- El texto en negrita `strong`

## Listas
- Ordenadas `<ul></ul>`
- Desordenadas `<ol></ol>`
- Los items `<li></li>`

## Rutas
- Absolutas: `http://github.com`
- Relativas: `/perfil`

## Enlaces
`<a href="alguna-direccion">El texto del enlace</a>`

## Imágenes

`<img src="el-path/hacia/la-imagen.jpg" alt="Un texto descriptivo">`

## Etiquetas semánticas

Funcionan igual que un div, con la diferencia que su nombre nos sugiere el tipo de contenido que habrá dentro.

```html
<header></header>
<footer></footer>
<main></main>
<section></section>
<article></article>
```

## Otros elementos útiles

- Los saltos de linea (break) `<br>`
- Las líneas verticales (horizonal rule) `<hr>`
- Los comentarios `<!-- -->`

## Extra: Setup de nodemon

Guardamos **nodemon** como dependencia de desarrollo:
`npm i nodemon --save-dev`

Creamos nuestros **scripts** en **package.json**
```
    "start": "node app.js",
    "startdev": "nodemon app.js -e js,html"
```