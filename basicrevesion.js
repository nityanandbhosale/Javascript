//All revesion of js

//methods of arry

 x = 10
 console.log(x)
 x = 100
 console.log(x) // so here in vairable we can udate the values of strings

 //constant
 console.log("----------consatant---------")

 y = 20
 console.log(y) // but in constant you cant update the values

 // index
 console.log('----indexing-------')

 let xx = "nityanand"
 console.log (xx)
 console.log(xx.length)

 //if i want indexwise character then

 console.log(xx[3])
 console.log(xx[6])

 //All methods in arry

 console.log("----- All Arry Methods ----------")

 let arry = ["rose","marrygold","jasmine","mogra"]
 console.log(arry)

 //if you have add the element at last use push
 arry.push("lotus")
 console.log(arry)

 //if you have to add the element at first use unshift
 arry.unshift("tulip")
 console.log(arry)

// if you have to remove the elememt at last use pop
arry.pop()
console.log(arry)

// if you have to remove the elememt at first so use shift
arry.shift()
console.log(arry)

// you have to cheak the elements in the arry use includes
let bb = arry.includes("marrygold")
console.log(bb)

let c = arry.includes("Mogra")//this value false cause it is case sensitive
console.log(c)

// if reverse the arry
arry.reverse()
console.log(arry)

//if you require alphbetical order
arry.sort()
console.log(arry)

//if you have to know the index of use indexof
let cc = arry.indexOf("jasmine")
console.log(cc) 

let d = arry.indexOf("rose")
console.log(d)

//slice
//in slice we can form a new arry taking as starting and ending position
//               0      1      2      3        4        5          6       7
let students =["ram","sham","sunil","sumit","omkar","nityanand","omkar","pradip"]
//              -8      -7    -6      -5       -4      -3          -2       -1
console.log(students.slice(1,5))
console.log(students.slice(0))
console.log(students.slice(7))
console.log(students.slice(2,-1))
console.log(students.slice(-1,-5))//here strting position in front of end position so it is void means null set
console.log(students.slice(-7,-1))
//in slice arry run from the left side to right side

//splice
//in splice you can delete and also update the element
//               0      1      2      3        4        5          6       7
let students1 =["ram","sham","sunil","sumit","omkar","nityanand","omkar","pradip"]
//              -8      -7    -6      -5       -4      -3          -2       -1

let oo =students1.splice(2,3,"sangram","arjun","ishwar")
console.log(oo)
console.log(students1)

let pp =students1.splice(0,2,"shubham","mahesh")
console.log(pp)
console.log(students1)

//flat
//in flat you can form a big arry from more rry

let arry1 = [[15,16,17,18],[20,26,354,18,],[30,29,12,][46,25,8,5]]

console.log(arry1.flat())

//fill
//in which you can fill the new element in arry

let numbers =[15,16,17,18,20,26,354,18,30,29,12,46,25,8,5]

let cd =numbers.fill('n',0,3)
console.log(cd)

let ef = numbers.fill('b',6,9)
console.log(ef)

//join
//in which youn can join the string 

let data = ["nityanand","bhosale","age",22]

let gf = data.join(" ")
console.log(gf)

//methods of strings

//map

let numbers1 = [11,22,33,44,55,66,77,88,99]

let df =numbers1.map(function(el){
    return el * 2
}) 
console.log(df)

let da = numbers1.map(function(el){
    return el + 5
})
console.log(da)

//Filter
//let numbers1 = [11,22,33,44,55,66,77,88,99]

let ca =numbers1.filter(function(el){
    return el > 10
})
console.log(ca)

let ac = numbers1.filter(function(el){
    return el < 11
})
console.log(ac)

//Reduce
////let numbers1 = [11,22,33,44,55,66,77,88,99]

let gh =numbers1.reduce(function(acc,el){
    return acc + el 
})
console.log(gh)


let add = 0
for(let i=0; i<numbers1.length;i++){
    add = add + numbers1[i]
}
console.log("Total sum of given number is : " + add)

//forEach

let people = ["ajit","ram","sada","banti","manohar"]

for(let i=0; i<people.length; i++){
    console.log("welcome " + people[i])

}
//by map
let bt = people.forEach(function(el){
    console.log("hello " + el)
})

console.log(bt)

//Some
let numeric = [2,6,8,10,14,16,20,22,26,]
above = []
for(let i=0; i<numeric.length; i++){
    if(numeric[i]>2){
        above.push(numeric[i])
    }
}
console.log(above)

//by aryy method
let pd =numeric.some(function(el){
    return el >8
})
console.log(pd)//if one of the number in arry is > 8 then it is true

let fg =numeric.some(function(el){
    return el > 28
})
console.log(fg)

//Every
let numeric1 = [2,6,8,10,14,16,20,22,26,]

let bf = numeric.every(function(el){
    return el > 10
})
console.log(bf)

let cf = numeric.every(function(el){
    return el > 2
})
console.log(cf)

let sd = numeric.every(function(el){
    return el > 1 
})
console.log(sd)

//Find 
//in which it gives the first element in the arry> condition
let hg =numeric.find(function(el){
    return el > 20
})
console.log(hg)

let hf =numeric.find(function(el){
    return el > 23
})
console.log(hf)

//Findexof
//in which it gives the index of first element > condition
//                0 1 2  3  4  5  6  7  8
//let numeric1 = [2,6,8,10,14,16,20,22,26,]

let fh = numeric.findIndex(function(el){
    return el >10
})
console.log(fh)

let gj = numeric.findIndex(function(el){
    return el <10
})
console.log(gj)

