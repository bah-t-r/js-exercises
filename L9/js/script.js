'use strict'

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 214649
// }

// function isBudgetEnough(data) {
//     let totalWidth = 0,
//         totalLength = 0
//     data.shops.forEach(element => {
//         totalWidth += element.width
//         totalLength += element.length
//     })
//     const volume = totalWidth * totalLength * data.height
//     const pay = volume * data.moneyPer1m3
//     if (pay <= data.budget) return 'Бюджета достаточно'
//     return 'Бюджета недостаточно'
// }

// console.log(isBudgetEnough(shoppingMallData))

// --------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam']
function sortStudentsByGroups(arr) {
    arr.sort()
    const a = [], b = [], c = [], rest = []
    for (let i = 0; i < arr.length; i++) {
        if (i < 3) a.push(arr[i])
        else if (i < 6) b.push(arr[i])
        else if (i < 9) c.push(arr[i])
        else rest.push(arr[i])
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length == 0 ? '-' : rest.join(', ')}`]
}
console.log(sortStudentsByGroups(students))

// let arrGroup = students.splice(0)
// console.log(students)
// console.log(arrGroup)