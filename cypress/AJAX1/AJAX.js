// in the we can lern the how front end developer write api request 
// code and how to impliment  them
// there are some steps

// call back hell
// sync
// async
// async ===> async 
// step 1 ===> step 2
// call back ====> promises 

//push the all user data in html

 
let userinfo = document.querySelector('#userInfo')
 //console.log(userinfo)

 function renderHtml(data){

    let html = `<div>
    
    <h1>firstName: ${data.first_name}</h1>
    <h2>lastName: ${data.last_name}</h2>
    <h2>id: ${data.id}</h2>
    <h2>email: ${data.email}</h2>
    <img src ="${data.avatar}"/>

    </div>`

    document.querySelector('#userInfo').insertAdjacentHTML('beforeend',html)
 }














//first we see that the call back hell ----> XMLHttpRequest

// let requ =new XMLHttpRequest()
// requ.open('GET','https://reqres.in/api/users?page=2')
// requ.send()
// requ.addEventListener('load',function(){
//     console.log(this.responseText)
//     console.log(JSON.parse(this.responseText))
// })

// using function arite again this method

// function getUser(pg){
//     let request = new XMLHttpRequest()
//     request.open('GET',`https://reqres.in/api/users?page=${pg}`)
//     request.send()
//     request.addEventListener('load',function(){
//         // console.log(this.responseText)
//         // console.log(JSON.parse(this.responseText))

//         let info = JSON.parse(this.responseText)
//         let id =info.data[0].id

//         console.log(id)


//         let request2 = new XMLHttpRequest()
//         request2.open('GET',`https://reqres.in/api/users/${id}`)
//         request2.send()
//         request2.addEventListener('load',function(){
//             // console.log(this.responseText)

//             let user = JSON.parse(this.responseText)
//             console.log(user.data)
//             let id = user.data.id

//             console.log(id)

//             let firstName = user.data.first_name
//             console.log(firstName)


//         })



//     })
// }

//cll the function

// getUser(1)
// getUser(2)
// getUser(3)

// now we you have the reslove this call back hell we can use the promises

function getInfo(pgno){
    fetch(`https://reqres.in/api/users?page=${pgno}`)
    .then(function(response){
        // console.log(response.json())
        return response.json()
    }).then(function(users){
        // console.log(users.data[0])
        return users.data[2].id
    }).then(function(id){
        // console.log(id)
        return fetch(`https://reqres.in/api/users/${id}`)
    }).then(function(info){
        // console.log(info.json())

        return info.json()
     }).then(function(object){
        //console.log(object.data)

        // let values = object.data
        // for(let key in values){
        //     console.log(key,values[key])
        // }

        renderHtml(object.data)
    })
}

// call the function

getInfo(1)
getInfo(2)