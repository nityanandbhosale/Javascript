
// cheak the function

let list = document.querySelectorAll('li')
let button =document.querySelector('button')
let ul =document.querySelector('ul')
var inputText =document.querySelector('input')

// console.log(inputText)
// console.log(list)
// console.log(button)
// console.log(ulList)

button.addEventListener('click',function(){
    let liText = inputText.value
    let newLi =document.createElement('li')//<li>mango</li>
    newLi.textContent = liText
    ul.appendChild(newLi)
    inputText.value = " "
})
