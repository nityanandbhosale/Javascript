// // PASSING FUNCTION

// //arry, string,object,function passing as a parameter to the function

// //1> Number as a parameter to function
// console.log("------------number as a parameter to function----------")

// function subtract(x,y){
    
//     return x - y
// }

// let aa =subtract(20,25)
// console.log(aa)

// console.log(subtract(60,50))

// //2>string as a parameter to function
// console.log("-----string as a parameter to function---------- ")


function countvowels(char){
    let vowel = 0
for(let i=0; i<char.length; i++){
    char[i] = char[i].toLowerCase()
    if( char[i]=="a" || char[i]=="e" || char[i]=="i" || char[i]=="o" || char[i]=="u"){
         vowel = vowel + 1
     }

 }     
  return vowel

}

let bb = countvowels("nityanand jotiram bhosale")
console.log(bb)

let cc = countvowels("ATISH PAWAR")
console.log(cc)

//arryn as a parameter to function
console.log("------arry as a parameter to function------")

  let cars = ["audi","BMW","rover","mersidies"]

 function names(vehicle){
      //let vehicle = cars

     vehicle[1] = "ferari"
     console.log(vehicle)
  }

  //console.log(cars)
  names(cars)
  console.log(cars)

  //example

 let num = [15,25,45,35,]
 let number = num

 number[1] = 55
 num[3] = 5

 console.log(number)
 console.log(num)

 function addition(sum){
     let ee =sum.reduce(function(acc,el){
         return acc  + el
     },0)
     return ee
 }
 let ff = addition(number)
 console.log(ff)

 console.log(addition(num))

//  // object

 let student ={
     name : "nityanand",
     sirname : "bhosale",
     age : 22
 }

  candidate = student

 candidate.name ="sanjay"

 console.log(student)
 console.log(candidate)

 //object as aparameter to function
 console.log("----object as a paremeter---------")

 let car1 = {
     name1:"swift",
     model : "dezire",
     mnufacture : 2019
 }

 function identify(obj){
    console.log(obj)
    obj.mnufacture = 2018

 }
 console.log(car1)
  identify(car1)
  console.log(car1)

  //print the object
  console.log("print the object")

  let crops ={
      cropname : "onion",
      type : "kharip",
      period :"4months"
  }

  function printfull(obj2){
      for(let keys in obj2){
          console.log(keys,crops[keys])
      }
      return obj2
  }

  console.log(crops)
  printfull(crops)
 console.log(crops)

 //suppose the example

 function mult(x,y){
     console.log(x * y)
 }
  mult(20,3)

  let add = function addition1(x,y){
      console.log(x + y)
  }
  add(50,60)
// console.log(add)//this known as printing the function defination for arrow function

// console.log("--------------------------------------")
// //new method

// let division = function(x,y){
//     return x / y
// }
// let gg = division(25,5)
// console.log(gg)

function division1(div){
    let hh =div(45,5)
    return hh
}
let ii =division1(add)
console.log(ii)

// console.log("***********************")
// // example

// function newone(){
//     return 55
// }
// let kk = newone()
// console.log(kk)

// function newone1(){
//     return {
//         firstname :"nityanand",
//         lastname :"bhosale"
//     }
// }
// let mm = newone1()
// console.log(mm.lastname)

// function newone2(){
//     return["wheat","rice","pulses","jowar","bajari"]
// }

// let nn = newone2()
// console.log(nn.slice(1,4))

// let oo = newone2()
// console.log(oo.splice(1,2))

// function newone3()

let person1 = {
    firstName: "chinmay",
    lastName :"deshpande",
    city : "nagpur"
}

for(let prop in person1){
    console.log(prop,person1[prop])
}

//instead of this you can use function

function print(obj){
    for(let prop in obj){
        console.log(prop,person1[prop])
    }
    return obj
}
console.log(person1)
print(person1)
console.log(person1)