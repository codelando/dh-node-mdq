const fs = require('fs').promises
const path = require('path')

const contentFile1 = fs.readFile(path.resolve(__dirname, './data1.txt'), 'utf8')
const contentFile2 = fs.readFile(path.resolve(__dirname, './data2.txt'), 'utf8')

const allPromises = Promise.all([contentFile1, contentFile2])

function cb(datos) {
    // hago algo con el archivo 1
}

allPromises
    .then((arrayContent) => {
        cb(arrayContent)

    })
    .catch(err => {
        console.log(err)
    })
  
/* contentFile1
    .then(function(contentFile){
        console.log(contentFile)
    })
    .catch(error => {
        console.log('No pudo leer el archivo')
    })

contentFile2
    .then(function(contentFile){
        console.log(contentFile)
    })
    .catch(error => {
        console.log('No pudo leer el archivo')
    }) */

