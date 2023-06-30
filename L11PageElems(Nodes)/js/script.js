'use strict'

// const box = document.getElementById('box')
// console.log(box)

// const btn = document.getElementsByTagName('button')[1]
// console.log(btn)

// const btns = document.getElementsByTagName('button')
// console.log(btns[1])

// const circle = document.getElementsByClassName('circle')
// console.log(circle)

// const hearts = document.querySelectorAll('.heart')
// console.log(hearts)
// hearts.forEach(item => {
//     console.log(item)
// })

// const oneHeart = document.querySelector('div')
// console.log(oneHeart)

// ----------------------

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
    //   hearts = document.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart'),
    // vvvvvvvvvvvvvvv
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart')

box.style.backgroundColor = 'blue'
box.style.width = '500px'
box.style.cssText = 'background-color: green; width: 300px'
btns[1].style.borderRadius = '100%'
circles[1].style.backgroundColor = 'red'
// for (let i = 0; i < 3; i++) {
//     circles[i].style.backgroundColor = 'red'
// }
for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'green'
}
hearts.forEach(item => {
    item.style.backgroundColor = 'blue'
});

const div = document.createElement('div')
div.classList.add('black')
// document.body.append(div)
document.querySelector('.wrapper').append(div)
// ^^^^^^^^^^^^^^^^^ "wrapper = document.querySelector('.wrapper')"
wrapper.prepend(div)
// hearts[0].after(div)
// hearts[2].before(div)
// circles[0].remove()
hearts[2].replaceWith(circles[0])

div.innerHTML = '<h1>Hello World!</h1>'
// div.textContent = '<h1>Hello World!</h1>' // используется когда данные принимаются от пользователя (применяется для безопасности)

div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>')