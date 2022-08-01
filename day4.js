//program one
let ages =[10,12,5,7]
let birthYear = []
for(let i=0; i<ages.length; i++){
     let aa = 2022-ages[i]
    birthYear.push(aa)
}
console.log(birthYear)

//Map
let aaa =ages.map(function(el){
    return 2022 - el
})
console.log(aaa)
//Map
let asat =[12,9,14,15]
let bbb =asat.map(function(el){
    return el / 2
})
console.log(bbb)

//program two
let numbers =[18,24,36,45,15,52,30,18,17,25,11]
above20 =[]

for(let i =0; i <numbers.length; i++){
    if(numbers[i]>20){
        obove20.push(numbers[i])
    }
}
console.log(obove20)

//By map

 let ccc = numbers.filter(function(el,index,arr){
     return el != 20
 })
 console.log(ccc)

 let fff = numbers.filter(function(el){
     return el > 30
 })
 console.log(fff)

 //suppose ex

 let bn =[23,27,32,36,40,39,55,60,18,75,28]
 let ii = bn.filter(function(el){
     return el > 50
 })
 console.log(ii)

 //program 3

 let ddd =[10,6,15,20]
 let total = 0
 for(let i=0; i<ddd.length; i++){
     total = total + ddd[i]
 }
 console.log(total)

 console.log("by map********")

 let sum =ddd.reduce(function(acc,el){
     return acc + el
 },0)
console.log(sum)

//program 4

let cars = ["swift","breeza","baleno","wagnor"]
for(let i=0; i<cars.length; i++){
    console.log("good selling cars :" + cars[i])
}

console.log("by map*********")
let ff = cars.forEach(function(el){
    console.log("good selling cars :" + el)
}) 

//program 5

let names =["sadanand","nityanand","shubh","jaymala"]
for(let i=0; i<names.length; i++ ){
console.log("welcome :" + names[i])
}

console.log("by map**********")

let gg = names.forEach(function(el){
console.log("welcome :" + el)
})