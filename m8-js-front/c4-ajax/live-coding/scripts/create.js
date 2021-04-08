const form = document.querySelector("form")
const text = document.querySelector("#field-text")
const status = document.querySelector("#field-status")

form.addEventListener("submit", function(event) {
    const objectBody = {
        text: text.value,
        status: status.value,
    }

    fetch(API_ENDPOINT, {
        method: 'POST',
        body: JSON.stringify(objectBody),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(res => {
            form.reset()
            loadTodos()
        })
    
    event.preventDefault()
})

