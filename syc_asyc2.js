//********** Synchronus & Asynchronus ************** */

// ----------- Synchronus------------------
console.log("------------ Synchronus --------- ")

// synchronus in which the code are run one by one as we cal to him

////import { Promise } from "cypress/types/bluebird";

function mult(){
    console.log(5 * 6)
}

function mult2 (){
    console.log(9 * 5)
}

//now if calling the fiunction 

mult()
mult2()

// so there is no matter to how to call the function according to there matter
// so i can call by the both the way
console.log("--------------------")
 mult2()
 mult()

 //**************** Asynchronus ***************** */
 console.log("************* Asynchronus ***********")

 function div(){
    setTimeout(function(){
        console.log(50 - 20)
    },2000)
 }

 function div2(){
    console.log(60 - 40)
 }

 // if you are calling the one by one
 div()
 div2()

 // Example
 function info(){
    setTimeout(function(){
        console.log(' id =g236505')
        setTimeout(function(){
            console.log('pass=086581')
            setTimeout(function(){
                console.log('user info:-nityanand bhosale')
                setTimeout(function(){
                    console.log("email:-bhosalenityanand@gmail.com")
                    setTimeout(function(){
                        console.log("your account is created")
                    },1000)

                },1000)
            },2000)
        },3000)
    },4000)
 }

 //if m call the function
 info()

 // this call the call back hell of the function
 // to reslove the problem of call back hell cypress introduced promises

 //in promises there is 3 states
 //pending
 //reslove
 //reject

  let pro1 = new Promise(function(resolve,reject){

 })

