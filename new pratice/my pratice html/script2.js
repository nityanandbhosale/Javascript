
let ulList =document.querySelector('ul')
let liList =document.querySelectorAll('li')
let button_1 =document.getElementById('butn')
let inputText =document.querySelector('input')

// console.log(liList)
// console.log(ulList)
// console.log(button_1)
// console.log(inputText)

for(let i=0; i<liList.length; i++){
    console.log(createButton(liList[i]))
}



button_1.addEventListener('click',function(){
    let liList =inputText.value
    let newList =document.createElement('li')
    newList.textContent =liList + " "
    ulList.appendChild(newList)
    createButton(newList)
    inputText.value =" "
    
})

ulList.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON"){
        if(e.target.className==="remove"){

            let li=e.target.parentElement
            let ul=li.parentElement
            ul.removeChild(li)
        }

        if(e.target.className==="Up"){
            let li =e.target.parentElement
            let ul =li.parentElement
            let prvel = li.previousElementSibling
            if(prvel==null){
                alert("there is no previous element in li you can't go up")
            }
            else{
                ul.insertBefore(li, prvel)
            }
            }
            
        

        if(e.target.className==="Down"){
            let li=e.target.parentElement
            let ul=li.parentElement
            let prvel=li.nextElementSibling
            if(prvel==null){
                alert("there is no next element in li so you can't go down")
            }
            else{
                ul.insertBefore(prvel,li)
            }
            
        }
    }
})



function createButton(li){

    let A =document.createElement('button')
    A.textContent ="Remove"
    A.classList ="Remove"
    li.appendChild(A)

    let B =document.createElement("button")
    B.textContent ="Up"
    B.classList ="Up"
    li.appendChild(B)

    let C =document.createElement("button")
    C.textContent ="Down"
    C.classList ="Down"
    li.appendChild(C)
}


