//object --->

//property and method

//object literals

// let nityanand ={
//     firstName:"nityanand",
//     lastName:"bhosale",
//     age:22,
//     city:"solapur",
//     birthYear:function(){
//         console.log(2022 - this.age)
//     }
// }

//dot notation and bracket  otation

// console.log(nityanand.firstName)
// console.log(nityanand.age=23)
// console.log(nityanand.lang="marathi")
// console.log(delete nityanand.lang)

// //by the bracket notataion

// console.log(nityanand['firstName'])
// console.log(nityanand['age']=23)
// console.log(nityanand['lang']="marathi")
// console.log(delete nityanand['lang'])

// console.log(nityanand)
// nityanand.birthYear()

let sadanand ={
    firstName:"sadanand",
    lastName:"bhosale",
    birth:1998,
    birthYear:function(){
        console.log(2022 - this.birth)
    
    }

}

sadanand.birthYear()


console.log("------------------------------------------")

//Different way to creat object

//1 object literal
//2 function constructor
//3 Es6 class
//4 object.creat()


//Function constructor
console.log("----------------- Function Constructor --------------")

let Person =function(fn ,ln){
    this.firstName=fn
    this.lastName=ln
}

 let nityanand =new Person("nityanand","bhosale")
 console.log(nityanand)

 nityanand.firstName ="omkar"
 nityanand.lastName ="shelake"

 console.log(nityanand)

 //function constructor
 console.log("-------------------------------------------")

let Person1 =function(nm,ty,dur,ses){
    this.name =nm
    this.type =ty
    this.duration =dur
    this.seasons =ses
}

let tomato =new Person1("tomato","vaishali","4months",["summer","winter","monsoon"])
console.log(tomato)

let ladyfinger =new Person1("ladyfinger","NH05","5_months",["winter","summer"])
console.log(ladyfinger)

let potato =new Person1("potato","sygenta","5_months",["winter","summer"])
console.log(potato)

//New example

let Person2 =function(cr,mod,manu,colr){
    this.car =cr
    this.model =mod
    this.manufacture =manu
    this.colour =colr
    this.carcolours=function(){
        console.log(this.colour.length)
    }
}

let swift =new Person2("dezire","DDIS",2018,["black","red","white","gray"])
console.log(swift)

let Audi =new Person2("audi","sports",2020,["black","red","sliver","golden","blue"])
console.log(Audi)

console.log(swift.car)
console.log(swift.model)
console.log(swift.colour)

console.log("----------------------------------")
//Audi
console.log(Audi.car)
console.log(Audi.model)
console.log(Audi.manufacture)
console.log(Audi.colour)

swift.carcolours()

Audi.carcolours()

console.log(swift instanceof Person2)
console.log(Audi instanceof Person2)

console.log(swift.__proto__===Person2.prototype)
console.log(Audi.__proto__===Person2.prototype)

