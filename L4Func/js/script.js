'use strict'

let num = 20

function showFirstMessage(text) {
    console.log(text)
    num = 10
    console.log(num)
}

showFirstMessage('Hello World!')
console.log(num)

function calc(a, b) {
    return (a + b)
}

console.log(`${calc(5, 2)}\n${calc(5, 5)}\n${calc(5, 10)}`)


const logger = function() {
    console.log('Hello')
}

logger()


