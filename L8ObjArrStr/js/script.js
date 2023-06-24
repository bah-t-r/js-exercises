'use strict'

// const oldArr = [1,2,3,4,5]
// const newArr = oldArr.slice(2,4)
// console.log(oldArr)
// console.log(newArr)

// const video = ['youtube', 'vimeo', 'rutube']
// const newV = [...video]
// newV[1] = 'bastion'
// console.log(video)
// console.log(newV)

// const obj = {
//     a: 1,
//     b: 2
// }
// const newObj = {...obj}
// obj.b = 3
// console.log(obj)
// console.log(newObj)

// -------------------

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     // showAgeAndLangs: function (obj) {
//     //     return `Мне ${obj['age']} и я владею языками: ${obj['skills']['languages'][0].toUpperCase()} ${obj['skills']['languages'][1].toUpperCase()}`
//     // },
//     showAgeAndLangs: function (obj) {
//         let result = `Мне ${obj['age']} и я владею языками: `
//         obj['skills']['languages'].forEach(element => {
//             result += `${element.toUpperCase()} `
//         })
//         return result
//     }
// }

// function showExperience(plan) {
//     return plan['skills']['exp']
// }
// // console.log(showExperience(personalPlanPeter))

// function showProgrammingLangs(plan) {
//     let result = ''
//     const {programmingLangs} = plan.skills
//     for (const key in programmingLangs) {
//         result += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//     }
//     return result
// }
// // console.log(showProgrammingLangs(personalPlanPeter))
// console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))

// ---------------------

// const family = ['Peter', 'Ann', 'Alex', 'Linda']
// function showFamily(arr) {
//     // if (arr == false) return 'Семья пуста'
//     if (!arr.length) return 'Семья пуста'
//     return `Семья состоит из: ${arr.join(' ')}`
// }
// // console.log(showFamily(family))

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin']
// function standardizeStrings(arr) {
//     return arr.join('\n').toLowerCase()
// }
// console.log(standardizeStrings(favoriteCities))

// ---------------------

const someString = 'This is some strange string'
function reverse(str) {
    if (typeof(str) != "string") return 'Ошибка!'
    // return str.split('').reverse().join('')
    return [...str].reverse().join('')
}
// console.log(reverse(someString))

const baseCurrencies = ['USD', 'EUR']
const additionalCurrencies = ['UAH', 'RUB', 'CNY']
function availableCurr(arr, missingCurr) {
    if (!arr.length) return 'Нет доступных валют'
    // const newArr = []
    // arr.forEach(element => {
    //     if (element != missingCurr) {
    //         newArr.push(element)
    //     }
    // })
    // return `Доступные валюты:\n${newArr.join('\n')}\n`
    let str = 'Доступные валюты:\n'
    arr.forEach(element => {
        if (element != missingCurr) {
            str += `${element}\n`
        }
    })
    return str
}
console.log(availableCurr(additionalCurrencies, 'CNY'))