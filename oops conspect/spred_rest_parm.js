//************ Spread And  Rest Operator *******************

// *************** Rest oprtator ***********

function addition(a,b,c,d,e,f,g,h){
    console.log(a+b+c+d+e+f+g+h)
}

addition(11,22,78,56,15,18,16,18)

// above this is the old method 

// now by the rest operator
console.log("********** rest operator ***********")

function addition2(...arr){
    console.log(arr)

    return arr.reduce(function(acc,el){
        return acc + el
    },0)
}

 let add = addition2(11,25,48,62,18,17,26,15,18,16)
 console.log(add)

 console.log("********************************************")
 function multiplication(...arr){
    console.log(arr)

    return arr.map(function(el){
        return el * 5
     }).reduce(function(acc,el){
         return acc + el
     },0)
 }

 let mult = multiplication(20,15,4,15,20,40,20)
 console.log(mult)

 //***************** Spread operator *******************
 console.log("************** Spread Operator *******************")

 let evennum = [2,4,6,8,10,12,14,16,18,20,]

 function addition3(a,b,c,d,e){
     console.log(a+b+c+d+e)
   
 }

 addition3(...evennum)

 let odnum = [3,5,7,9,11,13,15,17,19,21]
 function multiplication2(p,q,r,s,t,v){
     console.log(p*q*r*s*t*v)
 }

 multiplication2(...odnum)



// *********  jon the one or more arry **********
console.log("*********** JOint the Arry ********************")

let num = [1,22,33,44,55,66]
let num2 = [20,30,40,50,60]

let join = [...num,...num2]
console.log(join)

let students = ["nityanand","pradip","ankit","omkar","shubham"]
let ages = [22,23,24,21,22]

// let info = {...students,...ages}
// console.log(info)

let arry = [...students,...ages]
console.log(arry)

//************************************************ */
console.log("************ For of loop *****************")

let crops = {
    name:"tomato",
    type:"vaishali",
    period:"4_months"
}

//by this you can only access the properties

for(let key in crops){
    console.log(key)
}

console.log("-----------------------------------")
//by this you can acess the values
for(let key in crops){
    console.log(crops[key])
}

console.log("----------------------------------")
//by this you can acess the both 
for(let key in crops){
    console.log(key,crops[key])
}

// ***************** fore of for arry ****************
console.log("************** For of For Arry *********************")

let company = ["IBM","TCS","LTLK","Infosyis","Google","amazon","acenture"]

for(let item of company){
    console.log(item)
}

console.log("---------------------------------")
let mobiles = ["iphone","vivo","oppo","samsung","htc"]

for(let item of mobiles){
    console.log(item)
}

//************* for of For Object ***********************/
console.log("*************** For of For Object *******************")

let states = {
    name:"Mharashtra",
    capatil:"mumbai",
    faemous:"Gate way of india",
    ITcity:"pune"
}

// there is another one method for properties and values
//for proerties
console.log(Object.keys(states))
//for values
console.log(Object.values(states))
//for both
console.log(Object.entries(states))// it gives me the different arry 

let [key,value] = Object.entries(states)[0]
console.log([key,value])

let [key1,value1] = Object.entries(states)[1]
console.log([key1,value1])

let [key2,value2] = Object.entries(states)[2]
console.log([key2,value2])

let [key3,value3] = Object.entries(states)[3]
console.log([key3,value3])

/// bt using keys

console.log('---------------------------------------')
for(let item of Object.keys(states)){
    console.log(item)
}

console.log('-------------------')
// for values
for(let item of Object.values(states)){
    console.log(item)
}

console.log('---------------------------')
//for both
for(let item of Object.entries(states)){
    console.log(item)
}

console.log('-----------------------------')
// for seperate keys and values
for(let [key,value] of Object.entries(states)){
    console.log(key,value)
}

// *************** Ternary operator *****************
console.log("*************** Ternary operator ******************")

let x = 20
let y = 30 

let xy = x < y ? "x is greater":"y is greater"
console.log(xy)

let yz = x > y ? "x is greater":"y is greater"
console.log(yz)


let marksA = 50
let marksB = 34

let result = marksA > marksB ? "nityanand you are pass":"you are fail"
console.log(result)

let result2 = marksA < marksB ? "nityanand you are pass":"you are fail"
console.log(result2)

//**************Nullish operator *************** /
console.log("************* Nullish operator **************")

// condition(null or undefined)

let cheak = null ??"hello nityanand"
console.log(cheak)


let cheak1 =0 ??"hello nityanand"  //here any number will be true
console.log(cheak1)

let myname;

let cheak3 = myname ?? "welcome"
console.log(cheak3)    // output is hello beacuse there is no define the myname so it is undefined

//Chek for OR logic

let logic = 10===10 || "hello"
console.log(logic)


let logic2 = 10==='10' || "hello"
console.log(logic2)

// cheak for the  AND logic

let logic3 = 2===2 && 5!=='5'
console.log(logic3)


//****************** Optional parameter ********************* */
console.log('************* Optional parameter **********************')

let state = {
    maharashtra:{
        solapur:{
            barshi:{
                rui:{
                    name:"nityanand bhosale",
                    age:22,
                    skill:["js","css","python","html"]
                }
            }
        }
    }
}

// now how can we cheak it 

let find =state.maharashtra.solapur.barshi.rui.name
console.log(find)

//again 
// let find2 =state.maharashtra.solapur.barshi.ru.name
// console.log(find2)  // it will give the error if you are something missing in above structure

//let to avoid the error we use the optional parameter

let avoid =state?.maharashtra?.solapur?.barshi?.rui.skill
console.log(avoid)

let avoid2 =state?.maharashtra?.solapur?.barshi?.rui.skil
console.log(avoid2)  // here if i  do any mistake in above structure it not gives me error it only says undefned

// let me; 
// console.log(me)

// //console.log(myself)

                     












