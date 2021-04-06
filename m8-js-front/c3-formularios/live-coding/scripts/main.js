const form = document.querySelector("#form-login")
const name = document.querySelector("#field-name")
const lastName = document.querySelector("#field-lastname")

const errorName = document.querySelector(".error-name")
const errorLastName = document.querySelector(".error-lastname")
const errorMessages = document.querySelectorAll(".error-message")

// recorriendo todos los mensajes de error y los ocultamos
function resetFormErrors() {
    console.log('hola')
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

name.addEventListener("focus", resetFormErrors)
lastName.addEventListener("focus", resetFormErrors)

form.addEventListener("submit", function(e) {
    let errors = false

    // llamamos a la función que oculta los mensajes de error
    resetFormErrors()
    
    // validamos nombre
    if (name.value.length < 2) {
        // mostrar el error del nombre
        errorName.innerText = 'Por favor, complete su nombre'
        errorName.style.display = "block"
        errors = true
    }
    
    if (lastName.value.length < 2) {
        // mostrar el error del apellido
        errorLastName.innerText = 'Por favor, complete su apellido'
        errorLastName.style.display = "block"
        errors = true
    }

    // con que haya un solo campo con error, ya no se va a enviar el formulario
    if (errors) {
        e.preventDefault()
    }

})