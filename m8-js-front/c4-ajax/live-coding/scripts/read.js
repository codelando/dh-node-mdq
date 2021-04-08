
const containerTODO = document.querySelector('.todo-list')

function loadTodos() {
    fetch(API_ENDPOINT)
        .then(res => res.json())
        .then(todos => render(todos))  
}



function render(todos) {
    let htmlTODOS = ''
    
    todos.forEach(todo => {
        const htmlTODO = `
            <article>
                <p>${todo.text}</p>
                <p class="status">${todo.status}</p>
            </article>
        `

        htmlTODOS += htmlTODO
        
    })

    containerTODO.innerHTML = htmlTODOS
}


// ejecutamos inicialmente la función
loadTodos()