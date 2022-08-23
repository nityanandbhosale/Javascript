// All Methods of Arry
//1> map
let aa = [4,6,5,10,15,18,12,31,25]
let bb =aa.map(function(el,index,arr){
    return el *2 
})
console.log(bb)

console.log("divisible by 5")

let cc =aa.map(function(el){
    return el / 5
    
})
console.log(cc)

//filter
console.log("filter method")
let tem = [30,60,-45,55,-100,90,-65,-75]
positivetem =tem.filter(function(el,index,arr){
    return el > 0

})
console.log(positivetem)

negativetem =tem.filter(function(el){
    return el < 0
})
 console.log(negativetem)

 //reduce
 console.log("Reduce method")
 let totalp =positivetem.reduce(function(acc,el){
     return acc + el
 },0)
 console.log(totalp)

 let totaln =negativetem.reduce(function(acc,el){
     return acc + el
 },0)
 console.log(totaln)

 //Foreach
 console.log("foreach method")
 let dd =["prathmesh","cinmay","nityanand","shubham","ram"]
         dd.forEach(function(el,index,arr){
     console.log("have a nice day " + el)
})

//find()
console.log("find() method********************* ")
let ee =[11,34,33,55,45,75,58,29,66,77,88]
let ff =ee.find(function(el){
    return el > 40
})
console.log(ff)
let gg =ee.find(function(el){
    return el > 33
})    
console.log(gg)

//Findindex
console.log("findindex method************************")
let hh =ee.findIndex(function(el){
    return el > 40
})
console.log(hh)

let ii =ee.findIndex(function(el){
    return el > 30
})
console.log(ii)

//Every
console.log("evert method*********************")
let jj =[12,15,19,20,25,28,31,35,37,42,44]
let kk =jj.every(function(el,index,arr){
    return el > 10
})
console.log(kk)

let ll =jj.every(function(el,index,arr){
    return el > 20
})
console.log(ll)

//some
console.log("some method*******************")
let mm = jj.some(function(el,index,arr){
    return el < 30
})
console.log(mm)

let nn =jj.some(function(el){
    return el < 50
})
console.log(nn)

let oo =jj.some(function(el){
    return el > 50
})
console.log(oo)

//map()-----el,index,arr ===> arry

//filter()-----el,index,arr ===> arry

//reduce()-----el,index,arr ===> expression value

//foreach()-----el,index,arr ===> void

//find()-----el,index,arr ===> single element

//findendex()-----el,index,arr ===> number of index

//every()-----el,index,arr ===> boolean

//some()-----el,index,arr ===> boolean

//slice (IN WHICH YOU CAN TAKE NEW ARRY USING INDEX NUM STARTING POIN TO END)
console.log("slice method*****************")
//         0         1         2         3          4         5      6      7
let pp =["chinmay","pathmesh","sangram","pradip","sadanand","omkar","ram","shubh"]
   //       -8       -7          -6     -5          -4        -3     -2     -1
   console.log(pp.slice(2,4))
   console.log(pp.slice(1,6))
   console.log(pp.slice(-2,1))
   console.log(pp.slice(2))
   console.log(pp.slice(-4))
   console.log(pp.slice(-6,5))
   console.log(pp.slice(0))
   console.log(pp.slice(-1,-6))
   console.log(pp.slice(-6,-3))
   
console.log("hello nityanand")

//Splice method (IN WHICH YOU CAN REMOVE THE ELEMENT AND REPLACE THE ELEMENT USING INDEX NUMBER)
console.log("splice method***************")
let qq =["sadu","nityanand","rohit","prathmesh","sahil"]
//let rr =qq.splice(3,4)
//console.log(rr)
//console.log(qq)

//qq.splice(0,2)

//console.log(qq)

qq.splice(0,2,"sham","ajay")
console.log(qq)

qq.splice(3,4,"sushant","shivam")
console.log(qq)

//Flat (IN WHICH YOU CAN KNOW THE ANY ELEMENT USING INDEX AND SUBINDEX)
//multiple dimension arry
  //              0           1         2
  //         0  1  2    0  1  2   0   1  0
let arry =[[11,22,33],[44,55,66],[77,88,99]]
console.log(arry[0][1])
console.log(arry[0])
console.log(arry[1][2])
console.log(arry[2][1])
console.log(arry[2])

//Fill (IN WHICH YOU CAN FILL THE  NEW VALUES ACCORDING TO ITS INDEX NUMBER )
console.log("Fill method***************")
//          0   1  2  3  4  5  6  7  8  9 10 11  12
let marks =[25,23,14,42,35,46,88,75,94,25,15,65,76,]
let a =marks.fill('44',3,6)
console.log(a)

marks.fill('55',9,12)
console.log(marks)

marks.fill('20',1,7)
console.log(marks)













