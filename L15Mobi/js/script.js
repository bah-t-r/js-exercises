'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box')

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault()

    //     console.log('Start')
    // })
    // box.addEventListener('touchmove', (e) => {
    //     e.preventDefault()

    //     console.log('Move')
    // })
    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault()

    //     console.log('End')
    // })

    // box.addEventListener('touchstart', (e) => {
    //     e.preventDefault()

    //     console.log('Start')
    //     // console.log(e.touches)
    //     console.log(e.targetTouches)
    // })
        box.addEventListener('touchmove', (e) => {
        e.preventDefault()

        console.log(e.targetTouches[0].pageX)
    })
})