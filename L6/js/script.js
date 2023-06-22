'use strict'

function calculateVolumeAndArea(a) {
    if(typeof(a) == 'number' && a >= 0 && a % 1 === 0) {
        return `Объем куба: ${a*a*a}, площадь всей поверхности: ${6*a*a}`
    } else {
        return 'При вычислении произошла ошибка'
    }
}
// console.log(calculateVolumeAndArea('15'))

function getCoupeNumber(a) {
    if(typeof(a) !== 'number' || a < 0 || a % 1 !== 0) {
        return 'Ошибка. Проверьте правильность введенного номера места'
    } else if(a > 36 || a === 0) {
        return 'Таких мест в вагоне не существует'
    }
    return Math.ceil(a/4)
}
// console.log(getCoupeNumber(12.5))

function getTimeFromMinutes(minutes) {
    const hours = parseInt(minutes / 60)
    console.log(hours)
    if(minutes%1 == 0 && hours == 1)
        return `Это ${hours} час и ${minutes%60} минут`
    if(minutes%1 == 0 && hours > 1 && hours < 5)
        return `Это ${hours} часа и ${minutes%60} минут`
    if(minutes%1 == 0 && (hours > 4 && hours < 11 || hours == 0 && minutes%60 >= 0))
        return `Это ${hours} часов и ${minutes%60} минут`
    return "Ошибка, проверьте данные"
}
// console.log(getTimeFromMinutes(-59))

function findMaxNumber(a, b, c, d) {
    if (typeof(a) != 'number' || typeof(b) != 'number' || typeof(c) != 'number' ||
        typeof(d) != 'number') return 0
    let max = a
    if(b > max) max = b
    if(c > max) max = c
    if(d > max) max = d
    return max
}
// console.log(findMaxNumber(1, 5, 7.2))

function fib(n) {
    if (typeof(n) != 'number' || n <= 0 || n % 1 != 0) {
        return ''
    }
    let f1 = 0
    let f2 = 1
    let res = '0'
    for (let i = 1; i < n; i++) {
        res += ' ' + f2
        let temp = f2
        f2 += f1
        f1 = temp
    }
    return res
}
console.log(fib(-6))