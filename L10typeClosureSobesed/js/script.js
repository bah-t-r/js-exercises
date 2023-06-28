'use strict'

// console.log(typeof(String(null)))
// console.log(typeof(String(4)))
// console.log(parseInt('4px', 10))
// console.log(typeof(!!('4')))
// console.log(typeof(undefined))
// _______________

// function createCounter() {
//     let counter = 0
//     const myFunction = function() {
//         counter = counter + 1
//         return counter
//     }
//     return myFunction
// }

// const increment = createCounter()
// const c1 = increment()
// const c2 = increment()
// const c3 = increment()
// console.log(c1, c2, c3)

// -----------------------

// СОБЕС

// console.log([123] + false - null + true)
// console.log(NaN + 'asdsdf')
// let y = 1; let x = y = 2; console.log(x)
// console.log([] + 1 + 2)
// console.log("1"[-1])
// console.log(2 && 1 && null && 0 && undefined)
// console.log(!!('a' && 'b') === ('a' && 'b'))
// console.log('a' && 'b')
// console.log(!!('a' && 'b'))
// console.log(!!(true && false) === (true && false))
// console.log(null || 2 && 3 || 4 )
// console.log([1, 2, 3] == [1, 2, 3])
// console.log(+"*Infinity")
// console.log("jЁжик" < "jяблоко")
// console.log(0 || "" || 2 || undefined || true || false)

// -----------------------------

//  Exercises15

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}
console.log(isOpen(restorantData['openNow']))

// console.log(typeof(+'20$'.slice(0, -1)))
// console.log(+'14$'.slice(0, -1) + +'9$'.slice(0, -1))
// console.log(14 + '9')
// console.log(23 <= '23')
function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + +sDish.price.slice(0, -1) < average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}
console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const newRestorantData = {
        menu: [],
        waitors: [],
        averageLunchPrice: '',
        openNow: true
    }

    newRestorantData.waitors[0] = {name: 'Mike', age: 32};
    return newRestorantData;
}

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);

//     // Нам просто нужно менять весь массив данных,
//     // а не лезть напрямую менять каждого из сотрудников
//     // Так как это верхний уровень объекта, то значение 
//     // будет меняться только у копии
//     copy.waitors = [{name: 'Mike', age: 32}];
//     return copy;
// }

console.log(transferWaitors(restorantData));
console.log(restorantData)