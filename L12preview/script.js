'use strict'

const btns = document.querySelectorAll('button'),
      btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay'),
      link = document.querySelector('a')

// btns[1].onclick = () => {
//     alert('Click')
// }
// btns[1].onclick = () => {
//     alert('Second Click')
// }

// btns[1].onclick = alert('Click')
// btns[1].onclick = alert('Second Click')

// btns[1].addEventListener('click', () => {
//     alert('Click')
// })
// btns[1].addEventListener('click', () => {
//     alert('Second Click')
// })

// btns[1].addEventListener('mouseenter', (event) => {
//     // alert('Hover')
//     // console.log(event)
//     console.log(event.target)
//     event.target.remove() // Удаляется по событию
// })
// console.log(btns[0].remove()) // Удаляется сразу (вне зависимости от событии)

// btn.addEventListener('click', (e) => {
//     e.target.remove()
// })

// const deleteElement = (e) => {
//     e.target.remove()
// }
// btn.addEventListener('click', deleteElement)

// const deleteElement = (e) => {
//     console.log(e.target)
// }
// btn.addEventListener('click', deleteElement) // ??? Почему эта функция не выполняется
// btn.removeEventListener('click', deleteElement)

// // let i = 0
// const deleteElement = (e) => {
//     console.log(e.target)
//     // i++
//     // if (i == 1) {
//         btn.removeEventListener('click', deleteElement)
//     // }
// }
// btn.addEventListener('click', deleteElement)

// --------------------------------------------
// Всплытие

// const deleteElement = (e) => {
//     console.log(e.target)
//     console.log(e.type)
//     // console.log(e.currentTarget)
// }
// // btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)

// _______________________________________________
// Отмена стандартного поведения браузера

// link.addEventListener('click', (e) => {
//     e.preventDefault()

//     console.log(e.target)
// })

// ------------------------------------------------

// const deleteElement = (e) => {
//     console.log(e.target)
//     console.log(e.type)
// }
// // btns.forEach(btn => {
// //     btn.addEventListener('click', deleteElement)
// // });
// btns[0].addEventListener('click', deleteElement)
// btns[1].addEventListener('click', deleteElement)
// btns[2].addEventListener('click', deleteElement)

// ------------------------------------------------

const deleteElement = (e) => {
    console.log(e.target)
    console.log(e.type)
}
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true})
});
