const fs = require('fs').promises
const path = require("path");

const dataAsync1 = fs.readFile(path.resolve(__dirname, 'data1.txt'), 'utf8')

dataAsync1
    .then(content => console.log(content))
    .catch(err => console.log(err))

const dataAsync2 = fs.readFile(path.resolve(__dirname, 'data2.txt'), 'utf8')

Promise.all([dataAsync1, dataAsync2])
    .then(([res1, res2]) => {
        console.log('res1', res1)
        console.log('res2', res2)
    })