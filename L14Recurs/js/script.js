'use strict'

// function pow(x, n) {
//     if (n === 0) return 1
//     else return x * pow(x, n - 1)
// }

// console.log(pow(2, 0))
// console.log(pow(2, 1))
// console.log(pow(2, 2))
// console.log(pow(2, 3))
// ______________________

let courses = {
    js: [{
        student: 'John',
        progress: 100
    }, {
        student: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            student: 'Peter',
            progress: 20
        }, {
            student: 'Ann',
            progress: 18
        }],
        pro: [{
            student: 'Sam',
            progress: 10
        }]
        // semi: {
        //     coders: [{
        //         name: 'Test',
        //         progress: 100
        //     }]
        // }
    }
}

function getTotalProgressByIteration(data) {
    let totalProgress = 0
    let students = 0
    for (const course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length
            course.forEach(element => {
                totalProgress += element['progress']
            })
        } else {
            for (const subCourse of Object.values(course)) {
                students += subCourse.length
                subCourse.forEach(element => {
                    totalProgress += element['progress']
                })
            }
        }
    }
    return totalProgress / students
}
console.log(getTotalProgressByIteration(courses))

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let totalProgress = 0
//         data.forEach(element => {
//             totalProgress += element['progress']
//         })
//         return [totalProgress, data.length]
//     }
//     let result = [0, 0]
//     for (const subData of Object.values(data)) {
//         const subDataArr = getTotalProgressByRecursion(subData)
//         result[0] += subDataArr[0]
//         result[1] += subDataArr[1]
//     }
//     return result
// }
// console.log(getTotalProgressByRecursion(courses)[0] / getTotalProgressByRecursion(courses)[1])

function getTotalProgressByRecursion(data) {
    let result = [0, 0]
    if (Array.isArray(data)) {
        data.forEach(element => {
            result[0] += element['progress']
        })
        return [result[0], data.length]
    }
    for (const subData of Object.values(data)) {
        const subDataArr = getTotalProgressByRecursion(subData)
        result[0] += subDataArr[0]
        result[1] += subDataArr[1]
    }
    return result
}
const result = getTotalProgressByRecursion(courses)
console.log(result[0] / result[1])
