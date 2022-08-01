//function for html

let olList =document.querySelectorAll('li')
let button = document.querySelector('button')
let inputText = document.querySelector('input')
let ol = document.querySelector('ol')
// console.log(olList)
// console.log(button)
// console.log(inputText)
// console.log(ol)

button.addEventListener('click',function(){
   let list =inputText.value
    let newList =document.createElement('li')
    newList.textContent =list
    ol.appendChild(newList)
    inputText.value =" "


})