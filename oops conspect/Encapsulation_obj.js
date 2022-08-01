//------------------- Encapsulation ----------------------
//------- Object -----> Property -------> Method

class Person {
    constructor(fn, ln, age, slry) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.salary = slry
    }

    updateName(fn) {
        this.firstName = fn
    }
    updatelast(ln) {
        this.lastName = ln
    }
    updateage(age) {
        this.age = age
    }
    updatesalry(sary) {
        this.salary = slry
    }


    getName() {
        return this.firstName
    }

    getlast() {
        return this.lastName
    }

    getage() {
        return this.age
    }

    getsalary() {
        return this.salary
    }
}

console.log("-----------------------------------------------")

let nityanand = new Person("nityanand", "bhosale", 22, "40k")
let sadanand = new Person("sadanand","bhosale",24,"50k")
console.log(sadanand)
console.log(nityanand)
nityanand.updateName = "sadanand"
nityanand.updatelast = "bhosale"
nityanand.updateage = 24
nityanand.updatesalary = "50k"

console.log(nityanand)

//------------------- Program two ------------------------

// const a = 100
// if (true) {
//     let aa = 20
// }
// {
//     let b = 21
// }

// console.log(a)
// console.log(aa)
 //console.log(b)

// --------------- program three ---------------

const mycar =function(){
    let carname = "Range rover"
    let model = "sports"
    let year = 2020

    let showcar = function(){
        console.log(`${carname} and its model is ${model}`)
    }

    return showcar
}

mycar()()
console.log(mycar()())

//------------------ program four ---------------
console.log("----------------------------------s")

function div(){
    let x = 20
    let y = 2
    return function(){
        console.log(x)
        console.log(y)
    }
}

// let ss = div()
// console.log(ss)  // it will give the function anonymous ---> means function have no name

let aa =div()
aa()            // it will gives the right output

//--------------- Program five --------------

const bank = function(){
    let name = "nityanand"
    let accno = 236505
    let banknm = "HDFC"

    let bankinfo =function(){
        console.log(`${name} your bank acc no is ${accno}`)
    }
    return bankinfo
}

bank()()

//------------- let program five -----------

class Student {
    constructor(){
        let firstName="nityanand"
        let lastName="bhosale"

        this.fullname =function(){
            console.log(firstName + lastName)

        }
    }
}

let nityanand2 = new Student()
nityanand2.fullname()
// console.log(firstName)
// console.log(lastName)

//------------------------------------------

class Crop {
    constructor(name,type,period){
        this.name=name
        this.type=type
        this.period=period

        this.cropinfo =function(){
            console.log(`${name} its type is ${type},and it takes ${period}`)
        }
    }
}

let potato =new Crop("potato","kimgdom","4_months")
console.log(potato)

potato.cropinfo()

//-------- Difference in let, var, and const ---------------

console.log("------------- Let ---------------")

{
    let a =10
    console.log(a)
}

// console.log(a)

let x = 10
console.log(x)
x = 20
console.log(x)

// var y = 
// var y = 50
// console.log(y)

{
    const b = 20
    console.log(b)
}






