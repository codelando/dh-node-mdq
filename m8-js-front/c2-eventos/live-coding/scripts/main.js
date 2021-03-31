
window.addEventListener("load", function() {
    document.querySelector("#button").addEventListener("click", function(e) {
        console.log(e.target)
        console.log(this)
    })
})