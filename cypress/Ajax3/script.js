//********************* AJAX ********************** */

// example one

function add() {
    console.log(20 + 30)
}

function subt() {
    console.log(50 - 20)
}

// // call the function
// subt()
// add()

// // by async

// function name(){
//     setTimeout(() => {
//         console.log("Hello nityanand")
//     },2000);
// }

// function name2(){
//     setTimeout(()=>{
//         console.log("Hello Sadanand")
//     })
// }

// name()
// name2()

// // now by the call back hell

// function creatnew(){
//     setTimeout(function(){
//         console.log("please enter your name")
//     },3000)

//     setTimeout(function(){
//         console.log("this is your new id created")
//     },2000)

//     setTimeout(function(){
//         console.log("Welcome your account is created")
//     })


// }

// creatnew()

// console.log('***************************************************')

// // to excute async to synchronus we write the call back hell

// function newone(){
//     setTimeout(function(){
//         console.log('new user is created')
//         setTimeout(function(){
//             console.log('this is your new id')
//             setTimeout(function(){
//                 console.log('welcome to our new profile')
//             },1000)
//         },2000)
//     },3000)

// }

// newone()

// this is the call back hell to avoid this we use th promises

let show = new Promise(function (resolve, reject) {

    let a = "nityanand"
    let b = "nityanand"

    if (a == b) {
        resolve("hello nityanand")
    }
    else {
        reject('oops somethig went wrong')
    }
})

// show.then(function (msg) {
//     console.log(msg)
// })
//     .catch(function (msg) {
//         console.log(msg)
//     })
//     .finally(function () {
//         console.log('hey m always here with you')

//     })

//-------------------************************-------------------q

let contain = document.querySelector('#apidata')
// console.log(contain)


function renderHtml(info) {

    let html = `
    <div>
    <h1>firstname :- ${info.first_name}</h1>
    <h2>lastname :-${info.last_name} </h2>
    <h2>email :- ${info.email}</h2>
    <h2>id :- ${info.id}</h2>
    <img src="${info.avatar}"/>
    </div>`

    contain.insertAdjacentHTML('beforeend', html)
}


//************************************************** */

// ************************* Xmlhttprequest **********************

// let req =new XMLHttpRequest()
// req.open('Get','https://reqres.in/api/users?page=2')
// req.send()
// req.addEventListener('load',function(){
//     // console.log(this.responseText)
//     console.log(JSON.parse(this.responseText))
// })

function getdata(pgno){
    let request = new XMLHttpRequest()
    request.open('GET',`https://reqres.in/api/users?page=${pgno}`)
    request.send()
    request.addEventListener('load',function(){
         //console.log(this.responseText)
         //console.log(JSON.parse(this.responseText))

        let info = JSON.parse(this.responseText)
        let getid = info.data[1].id
        // console.log(getid)


        let request2 = new XMLHttpRequest()
        request2.open('GEt',`https://reqres.in/api/users/${getid}`)
        request2.send()
        request2.addEventListener('load',function(){
            // console.log(JSON.parse(this.responseText))

            let user =JSON.parse(this.responseText)
            // console.log(user)
            // let Aaa = user.data
             renderHtml(user.data)

        })
    })
}

getdata(1)
getdata(2)


//***************** .then() method ***************** */

// function getusers(page) {
//     fetch(`https://reqres.in/api/users?page=${page}`)
//         .then(function (res) {
//             // console.log(res.json())
//             return res.json()
//         }).then(function (obj) {
//             // console.log(obj)
//             let id = obj.data[3].id
//             return id
//         }).then(function (idno) {
//             fetch(`https://reqres.in/api/users/${idno}`)
//             .then(function (resp) {
//                 // console.log(user)
//                  return resp.json()
//              }).then(function (user) {
//                 //  console.log(user)
//                 return user
//              }).then(function (obj) {
//                  renderHtml(obj.data)
//              })
//         })

// }
// getusers(2)
// getusers(1)
// getusers(0)


//************* method by getjson ******************* */

function getjson(url){
    return fetch(url)
    .then(function(users){
        return users.json()
     })
}

// getjson('https://reqres.in/api/users?page=2')

// **************** Now using the async function *********************

// let getinfo = async function(pagenum){
//     let info  = await getjson(`https://reqres.in/api/users?page${pagenum}`)

//     let id = info.data[3].id
    
//     let user = await getjson(`https://reqres.in/api/users/${id}`)

//     let data =user.data

//     renderHtml(data)

// }

// getinfo(1)
// getinfo(3)

//******************************************** */

// let getuser = async function(a1,a2,a3){

//     let user = await Promise.all([
//         getjson(`https://reqres.in/api/users/${a1}`),
//         getjson(`https://reqres.in/api/users/${a2}`),
//         getjson(`https://reqres.in/api/users/${a3}`)
//     ])
//     return user
// }

// let cheak = getuser(1,2,7)

// cheak.then(function(obj){
//     //  console.log(obj)
//      renderHtml(obj[0].data)
//      renderHtml(obj[1].data)
//      renderHtml(obj[2].data)
// })
 
// let promall = async function(){

//     let methd = await Promise.all([
//         Promise.resolve('hello nityanand'),
//         Promise.reject('Bye'),
//         Promise.resolve('hello nityanand')
//     ])
//     console.log(methd)
// }

// promall()

//********************************************* */

// let promallsett = async function(){

//     let methd = await Promise.allSettled([
//         Promise.resolve('hello nityanand'),
//         Promise.reject('Bye'),
//         Promise.resolve('hello nityanand')
//     ])
//     console.log(methd)
// }
// promallsett()

// //*************************************************** */

let promrace = async function(){

    let methd = await Promise.race([
        // Promise.reject('Bye'),
        Promise.resolve('hello nityanand'),
        // Promise.reject('Bye'),
        Promise.resolve('hello nityanand')
    ])
    console.log(methd)
}

promrace()

//*************************************************** */


// let promany = async function(){

//     let methd = await Promise.any([

//         Promise.reject('Bye'),
//         Promise.resolve('hello nityanand'),
//         Promise.resolve('hello nityanand'),
//         Promise.reject('Bye')
        
//     ])
//     console.log(methd)
// }
// promany()


// there are four promise methods 
//1> promise.all -------> return only resolved promises
//2> promise.allSettled ----> return all the promises resolved and reject
//3> promise.race  ----> return first only resolved promise and stop the code if reject
//4> promise.any ---> return first ony resolved not stop at rejected
