// let first find all the required element

let inputText = document.querySelector('input')
let buttonAdd = document.querySelector('#New')
let ulList =document.querySelector('#ulone')
let liList = document.querySelector('li')

// console.log(inputText)
// console.log(buttonAdd)
// console.log(ulList)
// console.log(liList)

// now add new element by user input

for(let i=0; i<=ulList.length; i++){
    console.log(createButton(liList[i]))
}


buttonAdd.addEventListener('click',function(){
    let newli = inputText.value
    let newTag =document.createElement('li')   //<li>Orange</li>
    newTag.textContent =newli 
    createButton(newTag)
    ulList.appendChild(newTag)
    inputText.value =""

})






function createButton(li){
    let remove =  document.createElement('button')  //<button></button>
    remove.textContent = 'remove'
    remove.className='remove'
    li.appendChild(remove)

    let up = document.createElement('button')
    up.textContent = 'up'
    up.className = 'up'
    li.appendChild(up)

    let down = document.createElement('button')
    down.textContent = 'down'
    down.className = 'down'
    li.appendChild(down)

}










































// buttonAdd.addEventListener('click',function(){
//     let newli = inputText.value
//     let newTag = document.createElement('li')
//     newTag.textContent = newli
//     ulList.appendChild(newTag)
//     inputText.value =""
// })