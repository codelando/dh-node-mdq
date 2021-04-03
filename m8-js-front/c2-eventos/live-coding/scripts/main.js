
const button = document.querySelector(".button-accept")

/* button.onclick = function() {

} */



button.addEventListener("click", function() {
    console.log('click en el boton', this)
    
})


button.addEventListener("mouseover", function() {
    /* console.log('mouseover en el boton') */
})

button.addEventListener("mouseout", function() {
    /* console.log('mouseout en el boton') */
})

button.addEventListener("mousemove", function(event) {
    /* console.log('mousemove en el boton') */
})

button.addEventListener("dblclick", function(event) {
    /* console.log('dblclick en el boton') */
})



let acumulator = ""

window.addEventListener("keydown", function(event) {
    console.log(event)
    const key = event.key
    acumulator += key
    
})