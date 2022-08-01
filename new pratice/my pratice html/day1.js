//prstice of methods
// alert('hello')
let city =["mumbai","pune","nagpur","aurngabad"]
console.log(city.length)

console.log(city[2])

console.log(city[0])
console.log(city[0][2])

console.log(city[3])
console.log(city[3][3])

console.log(city.includes("pune"))
console.log(city.includes("Nagpur"))
//arry
console.log("Arry**************")

let animals =["dog","cat","horse","lion","tiger"]
console.log(animals.length)

console.log(animals.length-1)
console.log(animals[4])

//push methon add the element at lsat
//and return the new length of arry
console.log("push method******************************")


let cc =animals.push("camel")
console.log(animals)
console.log(cc)

//unshift method add the elelment at first
//and return the new length of arry
console.log("unshift***********************")

let dd =animals.unshift("monkey")
console.log(animals)
console.log(dd)

//pop method remove the elelment from last
//and return same element of arry
console.log("pop**********************")

let ee =animals.pop()
console.log(animals)
console.log(ee)

//shift method remove the elelment at first
//and return the same elelment of arry
console.log("shift********************")

let ff =animals.shift()
console.log(animals)
console.log(ff)

//include method gived the answe of charcter present in the arry or not 
//and return the boolean (trur or false)

console.log("includes method*************")

let gg =animals.includes("lion")
console.log(gg)

let hh =animals.includes("Lion")
console.log(hh)

//for loop use to avoid repetation of code
console.log("For loop****************")

let crops =["jowar","bajari","corn","pulses"]
console.log(crops.length)

for(let i=0; i<crops.length; i++){
    console.log(i)
    console.log(crops[i])
    console.log([i])
}

//if i have to print the  arry reverse direction
console.log("Reverse arry***********/")

for(let i=crops.length; i>=0; i--){
    console.log(i)
    console.log(crops[i])
}
