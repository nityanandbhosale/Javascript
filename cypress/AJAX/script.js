// we check the url responce


// function getdata() {
//     fetch('https://reqres.in/api/users?page=2')
//         .then(function (resp) {
//             return resp.json()
//         }).then(function (responce) {
//             // console.log(data)
//             let info = responce.data
//             // console.log(info)
//             return info

//         }).then(function (el) {
//             // console.log(el)
//             el.forEach(element => {
//                 renderHtml(element)
//             });
//         })
// }

// getdata()

// JSON ==> javascript object notation
// XML ===> Extensible markup langauge
// AJAX ==> asynchronus javascript and XML

// promise methods 

function getUser(getid) {
    return fetch(`https://reqres.in/api/users/${getid}`)
        .then(function (res) {
            return res.json()
        }).then(function (user) {
            return user.data
            
        })
}

let container = document.querySelector('#one')
// console.log(container)


let renderHtml = function (el) {
    let html = `
    <div>
    <h2>${el.first_name}</h2>
    <h2>${el.last_name}</h2>
    <h2>${el.id}</h2>
    <h2>${el.email}</h2>
    <img src="${el.avatar}"/>
    </div>

    `
    container.insertAdjacentHTML('beforeend', html)
}

// let users = async function(one,two,three){
//     let idOne = await getUser(one,)
//     let idTwo = await getUser(two)
//     let idThree = await getUser(three)

//     console.log(idOne,idTwo,idThree)
// }

// users(1,3,5)

// async function parallela(one, two, three) {

//     let user = await Promise.all([
//         getUser(one),
//         getUser(two),
//         getUser(three)
//     ])

//     console.log(user)
// }

// parallela(1, 12, 6)

// For promise .race
//===> it gives the the resolved first 
// async function parallelR(one,two,three){
//     let user = await Promise.race([
//         getUser(one),
//         getUser(two),
//         getUser(three)
//     ])

//     console.log(user)
// }

// parallelR(4,5,3)

// async function checkAll(){
//     let exam =await Promise.race([
//         Promise.resolve('cypress'),
//         Promise.reject('java'),
//         Promise.resolve('javascript')
//     ])
//     console.log(exam)
// }

// checkAll()

// promice.allSetteled
//===> it gives the the all promoses resolved and reject

// async function parallelAll(one,two,three){
//     let user = await Promise.allSettled([
//         getUser(one),
//         getUser(two),
//         getUser(three)
//     ])
//     console.log(user)
// }

// parallelAll()

// async function checkAll(){
//     let check = await Promise.allSettled([
//         Promise.resolve('Cypress'),
//         Promise.reject('Java'),
//         Promise.resolve('Javascript')
//     ])
//     console.log(check)
// }

// promose .any
//===> it gives the the first resolves and not stop on reject

// async function parallelAny(one,two,three){
//     let user = await Promise.any([
//         getUser(one),
//         getUser(two),
//         getUser(three)
//     ])
//     console.log(user)
// }
// parallelAny(4,5,8)

// async function checkAny(){
//     let check = await Promise.allSettled([
//         Promise.resolve('Cypress'),
//         Promise.reject('Java'),
//         Promise.resolve('Javascript')
//     ])
//     console.log(check)
// }
// checkAny()

// make the one asynchronous function

let getdata =function(){
    return new Promise(function(reslove){
        setTimeout(()=>{
            reslove('file Found')
        },3000)
    })
}

let getdata2 = function(){
    return new Promise(function(reject){
        setTimeout(()=>{
            reject('file is not found')
        },1000)
    })
}

// promise .all
async function data1(){
    let info = await Promise.all([
        getdata(),
        getdata2(),
        Promise.resolve('uploaded'),
        Promise.reject('uploaded')
    ])
    console.log(info)
}

data1()

// promise.race

// async function data2(){
//     let info2 = await Promise.race([
//         getdata(),
//         getdata2(),
//         Promise.resolve('uploaded')
//     ])
//     console.log(info2)
// }

// data2()

// // promise.alllsettled

// async function data3(){
//     let info3 = await Promise.allSettled([
//         getdata(),
//         getdata2(),
//         // Promise.resolve('uploaded')
//     ])
//     console.log(info3)
// }

// data3()

// // promise.any

// async function data4(){
//     let info4 = await Promise.any([
//         getdata(),
//         getdata2(),
//         // Promise.resolve('uploaded')
//     ])
//     console.log(info4)
// }

// data4()



// there are four promise methods 
//1> promise.all -------> return only resolved promises
//2> promise.allSettled ----> return all the promises resolved and reject
//3> promise.race  ----> return first only resolved promise and stop the code if reject
//4> promise.any ---> return first ony resolved not stop at rejected
