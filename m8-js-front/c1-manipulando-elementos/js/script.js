
// devuelve un elemento
const title1 = document.querySelector('body h1#title-1')

// devuelve un listado de elementos que encuentre a partir del selector
const texts = document.querySelectorAll('.text')


// CSS

// agregar una clase
title1.classList.add('danger')

// remueve una clase
title1.classList.remove('danger')

// toggle una clase
title1.classList.toggle('danger')

// devuelve un booleano si contiene la clase o no
title1.classList.contains('danger')


// STYLE
title1.style.color = 'green'
title1.style.backgroundColor = 'pink'

texts[1].classList.add('destacado')