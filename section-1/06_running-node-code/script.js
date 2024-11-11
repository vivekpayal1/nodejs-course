const fs = require('fs')
const { globalAgent } = require('http')

const textContent = fs.readFileSync('/home/vicky/Desktop/demo.txt')
console.log(textContent.toString())
console.log(global)
console.log('End')