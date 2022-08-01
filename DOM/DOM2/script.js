//noe add the element
// let name ="nityanand"
// console.log(name)

// let liList =document.querySelectorAll('li')
// console.log(liList)

// let addButton = document.querySelector('button')
//  console.log(addButton)
// //const element = document.getElementById("myBtn");

// let ulList =document.querySelectorAll('ul')
// console.log(ulList)

// console.log("---------------------------------")

// addButton.addEventListener('click',function(){
//     for(let i=0; i<liList.length;i++){
//         //console.log(i)
//         //console.log(liList[i].textContent)
//         liList[i].textContent ="apple"
//     }
// })

// Java script
// Html element------creat,retrive,update,delete
// Html element-----Creat,retrive,updste,delete(remove)
// Users action------ click,click on,mouseover,mouseout,load

//program two

let liList = document.querySelectorAll('li')
let addButton= document.querySelector('button')
let ulList = document.querySelector("ul")

console.log(liList)
console.log(addButton)

addButton.addEventListener("click",function(){
    for(let i=0; i<liList.length; i++){
        liList[i].style.color = "red"
        //list[i].style.colour ="aquablue"
    }
})

//program three

ulList.addEventListener("mouseover",function(){
    for(let i=0; i<liList.length; i++){
        liList[i].style.color ="red"
    }
})

ulList.addEventListener("mouseleave",function(){
    for(let i=0; i<liList.length; i++){
        liList[i].style.color ="black"
    }
})

