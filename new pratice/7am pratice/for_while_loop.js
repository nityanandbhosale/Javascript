//--------------- Loops --------------
//For loop and while loop
//for and while difference

console.log("---------- For Loop -------------")

for(let i=0; i<=5; i++){
    console.log(i)
}

let he ="Hello"
for(let i=0; i<he.length; i++){
    console.log(he[i])
}

//inthe reverse direction

for(let i=he.length-1; i>0;i--){
    console.log(he[i])
}

// break and continue method
console.log("-----------------------------------")

for(let i=0; i<=10; i++){
    console.log(i)
}

console.log("========================")
//if i have to break this loop 

for(let i=0; i<=10; i++){
    if(i==5){
        break
    }
    console.log(i)
}

console.log("---------------------------")
//if you have to continue this loop then
for(let i=0; i<=10; i++){
    if(i==5){
        continue
    }
    console.log(i)
}

console.log('===================')
//for reverse
for(let i=10; i>=0; i--){
    if(i==3){
        continue
    }
    console.log(i)
}

//we can use it with string

let name ="nityanand bhosale"

// for(let i=0; i<name.length; i++){
//     console.log(name[i])
// }

// console.log("===============================")
// //now break the name from the "a" character then
// for(let i=0; i<name.length; i++){
//     if(i=='n'){
//         continue
//     }
//     console.log(name[i])
// }

//---------------- While loop ---------------------
console.log("-------------- While Loop --------------------")

let n =0
while (n<=5) {
    console.log(n)
     n++
}

console.log("-------------------------------")
let j=10
while(j>0){
    console.log(j)
    j--
}