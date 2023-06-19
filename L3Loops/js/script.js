'use strict'

// let result = ''
// for (let i = 1; i < 7; i++) {
//     for (let j = 0; j < i; j++) {
//         result += '*'
//     }
//     result += '\n'
// }
// console.log(result)

// for (let i = 4; i < 10; ) {
//      console.log(++i)
// }

// for (let i = 20; i > 10; i--) {
//     if (i === 13) break
//     console.log(i)
// }

// for (let i = 2; i < 11; i+=2) {
//     console.log(i)
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while (i <= 16) {
//     if (i % 2 === 0) {
//         i++;
//         continue;
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// // let i = 1
// // while (i < 16) {
// //     i++
// //     if (i % 2 === 0) {
// //         continue;
// //     } else {
// //         console.log(i);
// //     }    
// // }

// const arrayOfNumbers = [];
// for (let i = 0; i < 6; i++) {
//      arrayOfNumbers[i] = i + 5
// }
// console.log(arrayOfNumbers)


// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];    
// }
// console.log(result)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// for (let i = 0; i < data.length; i++) {
//     if (typeof(data[i]) === 'number') {
//         data[i] *= 2
//     } else if (typeof(data[i]) === 'string') {
//         data[i] += ' - done'
//     }
// }
// console.log(data)

// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];
// for (let i = 0; i < data.length; i++) {
//     result[data.length - 1 - i] = data[i];    
// }
// console.log(result)

const lines = 5;
let result = '';
for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += ' '
    }
    for (let k = 0; k < i; k++) {
        result += '**'
    }
    result += '*\n'
}
console.log(result)