console.log("Pratice Code-------")

let arr = ["chinmay","prathmesh","nityanand","rahul"]
console.log(arr[1])
console.log(arr[0])

console.log("For loop--------")
for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

console.log("For reverce arry----------")
for(let i=arr.length-1; i>=0; i--){
    console.log(arr[i])
}

console.log("Next methods--------")
let cars =["swift","hundyia","breeza","kia"]
let aa = cars.length
console.log(aa)


console.log("push method-----")
let bb = cars.push("creata")
console.log(bb)
console.log(cars)

console.log("unshift method-------")
let cc = cars.unshift("baleno")
console.log(cc)
console.log(cars)

console.log("pop method------")
let dd = cars.pop()
console.log(dd)
console.log(cars)

console.log("shift method--")
let ee = cars.shift("baleno")
console.log(ee)
console.log(cars)

console.log("include method-----")
let ff = cars.includes("swift")
console.log(ff)

console.log("index of method-----")
let gg = cars.indexOf("breeza")
console.log(gg)

let hh = cars.indexOf("hundyia")
console.log(hh)

let ii = cars.reverse()
console.log(ii)

let jj = cars.sort()
console.log(jj)

//loops
console.log("methods of lops------")

let birthYear = ["2007","2010","2006","2012"]
let ages =[]
 for(let i=0; i<birthYear.length ; i++){
       let cAge = 2022-birthYear[i]
       ages.push(cAge)
}
console.log(ages)

//Another example of loop

let joining_year =[2017,2015,2018,2020]
let experiance = []
for(i =0; i<joining_year.length; i++){
 let cExperience =2022-joining_year[i]
 experiance.push(cExperience)
}
console.log("experiance is : " + experiance)

console.log("------ Filter method -----")
//Filter> 10
let marks =[36,45,42,58,56,22,66,17,32,16,65,30]
let above35 =[]
for(let i=0; i<marks.length; i++){
    if(marks[i]>35){
        above35.push(marks[i])
    }
}
console.log(above35) 

//sum
let num =[8,5,9,12,20]
let mul =1
for(let i=0; i<num.length; i++){
    mul = mul * mul[i]
}
console.log(mul)

//program
let names = ["cinmay","prathmesh","nityanand","sangram"]
for(let i=0; i<names.length; i++){
    console.log("thank you " + names[i])
}

let numbers = [4,7,10,12,18,15,21,24,9,26,16]
 oddnum1 = []
 evennum2 =[]

for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        evennum2.push(numbers[i])
    }else{
        oddnum1.push(numbers[i])
    }
}
console.log("Even array : " + evennum2)
console.log("Odd Array : " + oddnum1)

let allnum = [4,15,24,9,6,25,20,34,55,13,99,45,40,68,35,21]
let div3 = []
let div5 = []
let other = []

for(let i=0; i<allnum.length; i++){
    if(allnum[i]%3==0){
        div3.push(allnum[i])
    }else if (allnum[i]%5==0){
        div5.push(allnum[i])
    }else{
        other.push(allnum[i])
    }
}
console.log("number divisible by 3 : " + div3)
console.log("number divisible by 5 : " + div5)
console.log("other number : " + other)
