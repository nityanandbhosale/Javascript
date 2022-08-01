//STRUCTURE & DESTRUCTURE

let names =["sunil","sangram","sushil","omkar","pradip",]

//by our old methos we can print the character in the arry by using the method

let ab =names[0]
let bc =names[1]
let de = names[2]
let ef = names[3]
let fg = names[4]

//now call the vairaibles
console.log(ab)
console.log(bc)
console.log(de)
console.log(ef)
console.log(fg)

//BY the new method we can easily print the element by using the method
console.log("----------- by the new mht ----------")
let [aa,ac,ad,ae,af] = names

//now call vairaibles
console.log(aa)
console.log(ac)
console.log(ad)
console.log(ae)
console.log(af)

// next example
console.log("------------------------------")

let numbers = [10,20,30,40,50,60,70,80,90]
// i can easily access the elememnt 

let [a1,a2,a3] = numbers

console.log(a1)
console.log(a2)
console.log(a3)

// STRUCTURE & DESTRUCTURE OF OBJECT
console.log("------ STRUCTURE & DESTRUCTURE OF OBJECT -------------")

let crops ={
    name :"jowar",
    type : "rabbi",
    duration : "5 months"
}
//by our regular method

function full(obj){
      for(let keys in obj){
        (keys,crops(keys))
    }
    return obj
}
console.log(crops)

//By the new method

let {name,type,duration} = crops

console.log(name)
console.log(type)
console.log(duration)

//Now denote the property of obj by aligns
console.log("------  by using aligns to prperty ----------")
let {name:H2,type:H3,duration:H4} = crops

console.log(H2)
console.log(H3)
console.log(H4)

//arry in arry

console.log("------------------------------------------------")

let cars = [["BMW","audi","rover"],["swift","baleno","breeza"]]

//call the function

let [[kl,ks,kp],[rs,rp,rq]] = cars

console.log(kl)
console.log(ks)
console.log(kp)
console.log(rs)
console.log(rp)
console.log(rq)

console.log("--------------------------------------")
//object in object by aligans

let info ={
    city:{
        cityname:"maharashtra",
        capital:"mumbai"

    },
    city2:{
        cityname:"gujrat",
        capital:"gandhinagar"
    }
}

let {city:{cityname:cl,capital:cl2},city2:{cityname:h,capital:h2}} = info

console.log(cl)
console.log(cl2)
console.log(h)
console.log(h2)

console.log("----------------------------------------")

//object in arry

let animals = [
    {
        name:"tiger",
        type:"wild"
    },
    {
        name2:"dog",
        type2:"pet"
    }
]

let [{name:br,type:br2},{name2:ch,type2:ch2}] = animals

console.log(br)
console.log(br2)
console.log(ch)
console.log(ch2)

// SPREAD OPREATOR AND REST OPERATOR

//REST OPERATOR

 function addition(...arr){
     let add = arr.reduce(function(acc,el){
         return acc + el
     },0)
     return add
 }
 
 
 let digits =addition(2,5,8,15,13,12,17,22,16,25,28,26)
 console.log(digits)

 function multiplication(...mult){
     let rr = mult.map(function(el){
         return el * 2
     })
     return rr
 }

//let numbers1 = [8,12,14,16,18]

 let calaculate = multiplication(8,12,14,16,18)
 console.log(calaculate)

 //spread operator

 function seprate(a,...num){//in this is (a) can on which you are define the condition
     let ss =num.filter(function(el){
         return el > a
     })
     return ss
 }

 let sr = seprate(10,8,15,16,23,5,20,12,4,6,22,)
 console.log(sr)

 function divide(a,...nume){
     let rrr = nume.filter(function(el){
         return el < a
     })
     return rrr
 }

 let pq = divide(10,8,15,16,23,5,20,12,4,6,22,)
 console.log(pq)

