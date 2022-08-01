// Add the remove, up , down buttons

let ulList =document.querySelector('ul')
let inputText =document.querySelector('input')
let buttonA_1 =document.querySelector('#one')
let liList = document.querySelectorAll('li')
let headone =document.querySelector('h1')

// console.log(headone.textContent) // gives heading
// console.log(headone.classList)
// console.log(headone.className) //gives name= one two

// console.log(headone.localName) //gives h1



console.log(ulList)
console.log(inputText)
console.log(buttonA_1)

for(let i=0; i<liList.length; i++){
    console.log(createButton(liList[i]))
}

buttonA_1.addEventListener('click',function(){
    if (inputText.value == "") {}
    else {
   let list =inputText.value
   let newList =document.createElement('li') //<li></li>
    newList.textContent= list//<li>value</li>
    createButton(newList)
    ulList.appendChild(newList)
    inputText.value = ""
    }
    
})

ulList.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON"){
        if(e.target.className==="Remove"){

            let li =e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }

        if(e.target.className==="Up"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.previousElementSibling
            if(prevli==null){
                alert("previous element us not found in list")   
            }
            else{
                ul.insertBefore(li,prevli)    
            }
            
        }

        if(e.target.className=="down"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let prevli=li.nextElementSibling
            if(prevli==null){
                alert("there is  no next element in li so you cant go down")
            }
            else{
                ul.insertBefore(prevli,li)

            }
            
        }
    }
})




//function declaration

function createButton(li){

    let A =document.createElement('button')//<button></button>
    A.textContent = "Remove"//<button>Remove</button>
    A.classList = "Remove" //<button class="Remove">Remove</button>
    li.appendChild(A)

    let B =document.createElement('button')
    B.textContent = "Up"
    B.classList = "Up"
    li.appendChild(B)

    let C =document.createElement('button')
    C.textContent = "down"
    C.classList = "down"
    li.appendChild(C)
}