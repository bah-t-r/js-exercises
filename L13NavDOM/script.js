'use strict'

// console.log(document.body)
// console.log(document.head)
// console.log(document.documentElement)
// console.log(document.body.childNodes)
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)

// console.log(document.querySelector('#current').parentNode.parentNode)
// console.log(document.querySelector('[data-current="3"]').nextSibling)

// console.log(document.querySelector('[data-current="3"]').previousElementSibling)
// console.log(document.querySelector('#current').parentElement)
// console.log(document.body.firstElementChild)
for (const node of document.body.childNodes) {
    if (node.nodeName == "#text" || node.nodeName == "#comment") continue
    console.log(node)
}