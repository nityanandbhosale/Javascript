let name = "nityanand"
let lastName ="bhosale"
let middName = "jotiram"

console.log(name,lastName,middName)
console.log(name,middName,lastName)

//string stores the charcter by index

let city ="pune"
// 0 1 2 3
// p u n e

console.log(city[0])
console.log(city[2])

//if you have to find how many character in this string then
console.log(city.length)
//length-1 is always the last index
console.log(city.length-1)

//next example
//         
let car = "range rover"
console.log(car.length)

console.log(car[5])
console.log(car[7])

console.log(car.length-1)

//example new

let edu ="engenrring"

console.log(edu.length)

for(let i=0; i<edu.length; i++){
    console.log(i)
    console.log(edu[i])
    
}

//methods

let student ="nityanand"
let ss = student.toUpperCase()
console.log(ss)

//concat method merge the two text
let s = student.concat(" Bhosale")
console.log(s)

//
let bb =student.toLowerCase()
console.log(bb)
//localcompare method is to compare
let cc =student.localeCompare("nityanandgh")
console.log(cc)

let vv = student.localeCompare("nityanand")
console.log(vv)

let fruits = "apple"
let z =fruits.includes('pp')
console.log(z)

let zz = fruits.includes('L')
console.log(zz)

//Start with method

let fort ="raygad"
let nn =fort.startsWith('ra')
console.log(nn)

let mm =fort.split()//spilt method is stores it in the arry
console.log(mm)

let pp =fort.startsWith('Ra')
console.log(pp)

//endwith method

let flower ="merrygold"
let qq=flower.endsWith('ld')
console.log(qq)

let rr =flower.endsWith('D')
console.log(rr)

let tt =flower.search('g')//serch give the charter at which index
console.log(tt)



//trimstart method*****************
console.log("trimstart method*********************")
//trimstart remove the space from starting
let occup = " farming"
console.log(occup.length)
let ww =occup.trimStart()
console.log(ww)

console.log(ww.length)

//trimend method ******************
console.log("trimend method*******************")
// trimend remove the space from end
let intr ="singing "
console.log(intr.length)

let w =intr.trimEnd()
console.log(w)

console.log(w.length)

//trim method*******************
console.log("trim() methgod*******************")

let hobby =" workout "
console.log(hobby.length)
let x =hobby.trim()
console.log(x)

console.log(x.length)

//number + string --- string
//string + number ---- string    "hellow1312"
//string + string ---- string
//number + number ---- number

let a = 12
let b = 13
let c = "nityanand"

console.log(a + b)
console.log(b + c)
console.log(a + c + b)
console.log(c + b + a)
console.log(c+b+c+a)

//next method

let firstName ="nityanand"
let lastName1 ="bhosale"

//concat method
console.log("concat**************")

console.log(firstName +" "+lastName1)

//string liters, string interpolation
console.log("my first name is " +firstName + " and my last name is " +lastName1)
console.log(`my first name is ${firstName} and my lastname is ${lastName1} `)


//Comparision opreator
//< ,> ,<= ,>= ,!== ,!= ,=== ,==  boolean
console.log('comparision opreator')

console.log(3 <= 3)
console.log(5 <='5')
console.log(3==='3')
console.log(5<7)

console.log(3=='3')
console.log(4!=='4')
console.log(4!='4')

console.log(14!==16)
console.log(14!=16)
console.log(14!=='14')
console.log(14!='14')

console.log(16===14)

//Logical opreators*******
console.log("logical opreators************")
//AND
//true true ----- true
//true false ---- false
//false true ---- false
//false false --- false

//OR
//true true ---- true
//true false --- true
//false true ---- true
//false false --- false

//NOT
//true--false
//false--true

console.log("OR condition *****************")

console.log(14!='14'|| 16==='16')
console.log(14<=15 || 6==='2')
console.log(12>=10 || 5!=='5')
console.log(5>=5 || 10!=='10')

console.log("AND condition************")

console.log(10>=9 && 12!=='12')
console.log(6>=5 && 8!== 8)
console.log(20!==20 && 10<=12)
console.log(15!=15 && 2!='2')

console.log("NOT condition*****************")

console.log(!true)
console.log(!false)

//condition statment
console.log("condition stsatement*******")

//if(condition){
//  // boolean
// // this will run if condition is true
//}
////else{

//}

if(6!=='6'){
    console.log("hellow")
}
else{
    console.log('Bye')
}

if(12<9){
    console.log("hello")
}
else{
    console.log("Bye")
}

if(10<15 && 20>25){
    console.log("hello")
}
else{
    console.log("Bye")
}
if(6!='3'){
    console.log("hello")
}
else{
    console.log("Bye")
}

if(16!='16' || 13<=13){
    console.log("hello")
}
else{
    console.log("Bye")
}

//true :- -1, 1, A, 6>5
//false:- undefined,null,0,NaN, false, 7==='7'

let nu
console.log(nu)
//it output is undefined which is data type in js

if(undefined){
console.log("hello")  //here if condition is true then it print hello
}
else{
    console.log("Bye") // here if condition is false then it print Bye
}

if(null){
    console.log("hello")
    }
    else{
        console.log("Bye")
    }

if(0){
     console.log("hello")
     }
     else{
       console.log("Bye")
}

if(NaN){
    console.log("hello")
    }
    else{
        console.log("Bye")
    }

 if(false){
console.log("hello")
}
else{
    console.log("Bye")
}   

if(7==='7'){
    console.log("hello")
    }
    else{
        console.log("Bye")
    }
console.log("truth values---------")
if(-1){
console.log("hello")
}
else{
    console.log("Bye")
}

if(1){
    console.log("hello")
    }
    else{
        console.log("Bye")
    }

if('A'){
console.log("hello")
}
else{
    console.log("Bye")
}

if('nityanand'){
console.log("hello")
}
else{
    console.log("Bye")
}

if(5!=='5'){
    console.log("hello")
    }
    else{
        console.log("Bye")
    }
