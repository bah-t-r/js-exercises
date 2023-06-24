'use strict'

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    len: function(arg) {
        return Object.keys(arg).length
    }
}

let counter = 0
for (const key in options) {
    // if (typeof(options[key]) == 'object') {
    //     for (const i in options[key]) {
    //         console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
    //         counter++
    //     }
    // } else {
    //     console.log(`Свойство ${key} имеет значение ${options[key]}`)
        counter++
    // }
}
console.log(counter)
console.log(Object.keys(options).length)
console.log(options.len(options))

// Деструктуризация
const {border, bg} = options.colors
console.log(bg, border)
