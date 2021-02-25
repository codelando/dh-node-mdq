const fs = require('fs')
const path = require("path");

const dataSync1 = fs.readFileSync(path.resolve(__dirname, 'data1.txt'), 'utf8')
console.log(dataSync1)