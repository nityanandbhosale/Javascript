// // //conditional statement ??

// // //mark == 'A'||'B'||'C'
// // //marks > 90 ===> 'A'
// // //marks > 60 && marks <=90 ===> 'B'
// // //marks < 60 ====> C
// // console.log("/--------------------/")

// // let marks = 55
// // if(marks > 90){
// //     console.log('you got A grade')
// // }
// // {
// //     if(marks > 60 && marks <= 90){
// //       console.log('you got B grade')
// //  }
// // }
// // {
// //     if(marks < 60){
// //     console.log('you got C grade')
// //  }
// // }


// // let marks1 = 91
// // if(marks1 > 90){
// //     console.log('you got A grade')
// // }
// // {
// //  if(marks1 > 60 && marks1 <= 90)
// //       console.log('you got B grade')
// //  }

// // {
// //  if(marks1 < 60)
// //     console.log('you got C grade')
// //  }


// // let marks2 = 80
// // if(marks2 > 90){
// //     console.log('you got A grade')
// // }
// // {
// //  if(marks2 > 60 && marks2 <= 90)
// //       console.log('you got B grade')
// //  }

// // {
// //  if(marks2 < 60)
// //     console.log('you got C grade')
// //  }


// //Switch case ***********************
// console.log("switch case---------")

// let city = "Nagpur"  //here code is run according to case

// switch(city){
//     case "Nagpur":    
//         console.log("MH")
//     case "indoor":
//         console.log("MP")
//     case "varansi":
//         console.log("UP")
//     default:
//         console.log("please enter correct city")            

// }

// //Switch with break method
// console.log("switch with break method")

// let city2 = "indoor"
// switch(city2){
//     case "Nagpur":    
//         console.log("MH")
//         break
//     case "indoor":
//         console.log("MP")
//         break
//     case "varansi":
//         console.log("UP")
//         break
//     default:
//         console.log("please enter correct city")   

// }
// //loop
// console.log("-------loop-------")

// for(let i=0; i<6; i++){
//     console.log(i)
// }

// console.log('----------------------')
// for(let i=0; i<6; i++){
//     if (i==3){
//     break
//     }
//     console.log(i)

// console.log("----------reverce loop---------")

//     for(let i=6; i>0; i--){
//         console.log(i)
//     }

//     console.log('---------break----------')
//     for(let i=6; i>0; i--){
//         if(i == 3){
//             break
//         }
//         console.log(i)
//     }

// //Another loop method
// console.log("--------Another loop method----------")

// let j= 0
// for(;j<10;){
//     console.log(j)
//     //j = j+1
//     j += 1
// }
// }

// //continue method
// console.log("-------- continue mrthod ----------")

// for(i=0; i<51;i++){
//     if(i %5!=0){
//         continue
//     }
//     console.log(i)
// }


// // //pratice of loop

// // let states = ["maharashtra","gujrat","karnataka","kerla","mp","up"]

// // for(let i=0; i<states.length; i++){
    
// // }
// // console.log(states)

// // console.log("------------------------")

// // for(let i=0; i<states.length; i++){
// //     if(states==="kerla"){
// //         continue
// //     }
// // }
// // console.log(states)
// console.log("-------------------------")
// let k = 0
// while(k<=6){
//     if(k==3){
//         k++
//      continue
//     }
//     console.log(k)
//      k++
// }

// console.log('------- break =----------')

// let z = 10
// while(z>=0){
//     if(z==5){
//         break
//     }
//     console.log(z)
//     z--
// }


// //Arry, string, object, function
// //function object, function,string,number 
 
// //Number as parameter to function
// console.log('---------number as a parameter to function-------')

// function mult(x,y){
//     return x * y
// }
//  let pp = mult(12,5)
// console.log(pp)

// let kk = mult(15,5)
// console.log(kk)

// //String as a parameter
// console.log("----- string as a parameter------")

// // function countvowels(word){
// //     let word ="sangram"
// //     let count =0
// // for(let i=0; i<word.length; i++){
// //     word[i] = word[i].toLowerCase()
// //    if (word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
// //        count = count + 1
// //    }
// // }
// // return count
// // }
// //  let jj =countvowels("nityanand")
// // console.log(jj)

// // let cc =countvowels("sangram")
// // console.log(cc)

// //string are immutable

// let name = "nityanand"
// console.log(name)
// console.log(name[3])
// name[0]="s" // string are immutable cannot change the character in the string
// console.log(name)
// name ="rahul"
// console.log(name)

// // //Arry as a parsameter
// // console.log("------ Arry as a parameter -------")

// let flowers =["rose","lotus","tulip"]

// function colourof(sum){

//    // let sum = flowers

//     sum[1] = "jasmine"

//     console.log(sum)
// }
// console.log(flowers)
// console.log(flowers)

// // //next example

// // let num =[12,8,10,20]
// // let add = num
// // num[2] = 15
// // add[0] = 25

// // console.log(num)
// // console.log(add)

// // function addition(add){
// //     let qq = add.reduce(function(acc,el){
// //         return acc + el
// //     },0)
// //      return qq

// // }
// //  let rr = addition(add)
// // console.log(rr)

//object in the function
console.log('------ object in function----------')

let cars ={
    carname : "swift",
    model  : "dezire",
    manyear : 2018

}
let vehicle = cars
vehicle.carname = "hundiya"
console.log(cars)
console.log(vehicle)

// //object as a parameter to another function
// console.log("-------- object as a parameter to another function----------")

// let identify ={
//     nameof : "rose",
//     colourof : "pink",
//     variety : "good"
// }

// function getof(obj){
//     //console.log(obj)

//     obj.colourof = "red"

// }
// consolentify)
// console.log(identify)




// function countvowels(word){
//     //let word ="sangram"
//     let count =0
// for(let i=0; i<word.length; i++){
//     word[i] = word[i].toLowerCase()
//    if (word[i]=="a" || word[i]=="e" || word[i]=="i" || word[i]=="o" || word[i]=="u"){
//        count = count + 1
//    }
// }
// return count
// }
//  let jj =countvowels("nityanand")
// console.log(jj)

// let cc =countvowels("sangram")
// console.log(cc)


// let info ={
//     studentN : "nityanand",
//     srname : "bhosale",
//     skills : ["js","css","python","html"]
// }

// function newobj(myobj){
//     e.log(identify)
// getof(id
// }
