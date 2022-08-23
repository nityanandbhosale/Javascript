
// here we can see the new mathod of Api response
// first we use the method which is the call back hell
// to overcome out the call back hell we use the promises 
// in cypress nature of code async in nature but excuation in syncronus

// in this method we can consume more lines of code in few lines and directly get the
// Api response data in json format

//***************** Example one **********************************/

function userdata(){
    fetch('https://reqres.in/api/users?page=2')
    .then(function(response){
        console.log(response)
        return response.json()
    }).then(function(rs){
        console.log(rs)
        //  return rs

     })//.then(function(obj){
    //     let id = obj.data[0].id
    //     // console.log(id)
    //     return id
    // }).then(function(id){
    //     console.log(id)
    //     return id
    // }).then(function(idno){
    //     fetch(`https://reqres.in/api/users/${idno}`)
    //     .then(function(response){
    //         return response.json()
            
    //     }).then(function(user){
    //         console.log(user)
    //         let name = user.data.first_name
    //         console.log(name)
    //     })
    // })
}

// // userdata()

// //so this the promise method  we  write it takes the more line of code

// //******************* Another method *******************************/

// function getJson(url){
//     return fetch(url)
//     .then(function(response){
//         // (response.json())
//         return response.json()
//      })//.then(function(obj){
//     //     console.log(obj)
//     // })
// }
// getJson('https://reqres.in/api/users?page=2')

// //******************************************************* */

// // function getJson(url){
// //     return fetch(url)
// //     .then(function(response){
// //         console.log(response.json())
// //     })
// // }
// // getJson('https://reqres.in/api/users?page=2')

// //************************************************ */

// let userdata = async function(){
//     let user = await getJson('https://reqres.in/api/users?page=2')

//     let getid = user.data[0].id
//     // console.log(getid)
//     let info = await getJson(`https://reqres.in/api/users/${getid}`)
//         // console.log(info)
// }

// userdata()

// // here this async method is wait upto response and then execute

// //************ Promise.all method /

// // let info = async function(U1,U2,U3){
// //     let data =await Promise.all([
// //         // Promise.resolve('hello nityanand'),
// //         // Promise.reject('bye nityanand'),
// //         // Promise.resolve('hello nityanand'),

// //         getJson(`https://reqres.in/api/users/${U1}`),
// //         getJson(`https://reqres.in/api/users/${U2}`),
// //         getJson(`https://reqres.in/api/users/${U3}`)
// //     ])

// //     return data
// // }

// // let cheak = info(1,2,7)
// //  cheak.then(function(user){
// //     console.log(user)
// // })

// //******************* promise.any method ************* */

//  let infoany = async function(U1,U2,U3){
//     let data =await Promise.any([
//         Promise.resolve('hello nityanand'),
//         Promise.reject('bye nityanand'),
//         Promise.resolve('hello nityanand'),


//         //  getJson(`https://reqres.in/api/users/${U1}`),
//         //  getJson(`https://reqres.in/api/users/${U2}`),
//         //  getJson(`https://reqres.in/api/users/${U3}`)
//     ])

//     return data
//  }
//  let cheak2 = infoany(1,2,7)
//   cheak2.then(function(resp){
//      console.log(resp)
//  })

// //************* promise.allSettled ****************/

// // let infoallset = async function(U1,U2,U3){
// //     let data =await Promise.allSettled([
// //         Promise.resolve('hello nityanand'),
// //         Promise.reject('bye nityanand'),
// //         Promise.resolve('hello nityanand'),

// //         // getJson(`https://reqres.in/api/users/${U1}`),
// //         // getJson(`https://reqres.in/api/users/${U2}`),
// //         // getJson(`https://reqres.in/api/users/${U3}`)
// //     ])

// //     return data
// // }
// // let cheak3 = infoallset(1,2,7)
// //  cheak3.then(function(resp){
// //     console.log(resp)
// // })

// //**************************** promise.race method **************/

// // this method return the those who resolved first

// // let inforace = async function(U1,U2,U3){
// //     let data =await Promise.race([
// //         // Promise.resolve('hello nityanand'),
// //         // Promise.reject('bye nityanand'),
// //         // Promise.resolve('hello nityanand'),

// //         getJson(`https://reqres.in/api/users/${U1}`),
// //         getJson(`https://reqres.in/api/users/${U2}`),
// //         getJson(`https://reqres.in/api/users/${U3}`)
// //     ])

// //     return data
// // }
// // let cheak4 = inforace(1,2,7)
// //  cheak4.then(function(resp){
// //     console.log(resp)
// // })




