'use strict'

const usd2ten = 448
const ten2usd = 450
const ten2sum = 25
const sum2ten = 25
const sum2usd = 1147
const usd2sum = 1145

function buy(amount, rate) {
    return amount * rate
}
function sell(amount, rate) {
    return amount / rate
}

let flag = true
while(flag) {
    const num = +prompt(`Что у Вас есть?\n1. Доллары\n2. Тенге\n3. Сумы`, '')
    switch(num) {
        case 1:
            const num1 = prompt(`На что хотите обменять?\n1. Тенге\n2. Сумы\n`, '')
            flag = false; break
        case 2:
            const num2 = prompt(`На что хотите обменять?\n1. Доллары\n2. Сумы\n`, '')
            flag = false; break
        case 3:
            const num3 = prompt(`На что хотите обменять?\n1. Доллары\n2. Тенге\n`, '')
            flag = false; break
        default: alert('Error')
    }
}

const amount = +prompt('Сколько денег хотите обменять?', '')

switch(num) {
    case 1: alert(exchange(amount, usd2ten) + ' тенге'); break
    case 2: alert(exchange(amount, ten2usd) + ' долларов'); break
    case 3: alert(exchange(amount, ten2sum) + ' сумов'); break
    case 4: alert(exchange(amount, ten2sum) + ' тенге'); break
    case 5: alert(exchange(amount, sum2usd) + ' долларов'); break
    case 6: alert(exchange(amount, usd2sum) + ' сумов'); break
    default: alert('Error')
}