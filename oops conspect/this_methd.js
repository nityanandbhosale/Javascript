//----------- This methods

let nityanand = {
    firstName: "nityanand",
    lastName: "bhosale",
    age: 22,
    city: "solapur",
    myname: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

nityanand.myname()
console.log(nityanand.myname)


let sadanand = {
    firstName: "sadanand",
    lastName: "bhosale",
    age: 24,
    city: "solapur",
    myinfo: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

nityanand.myname.call(sadanand)
sadanand.myinfo.call(nityanand)



//suppose store this value in another example

//let nityanand2 = nityanand.myname;

let nityanand2 = function () {
    console.log(this.firstName + this.lastName)
}
// NaN --->  undefined  + undefined
nityanand2();

let crops = {
    name: "tomato",
    type: "vaishali",
    period: "4_months",
    cropname: function () {
        console.log(this.name + " and its type is " + this.type)
    }
}

crops.cropname()
console.log(crops.cropname)

//let ab =crops.cropname

let ab = function () {
    console.log(this.name + " and type is " + this.type)
}

ab()

//-------------------- Bind method -----------
console.log("-------------- Bind Method --------------")

let car = {
    name: "audi",
    model: "sports",
    color: "black",
    manufacture: 2019
}
let car2 = {
    name: "mercides",
    model: "sedane",
    color: "white",
    manufacture: "2020"

}

let carinfo = function () {
    console.log(this.name + " and its model is " + this.model)
}

carinfo.bind(car)  // here we can directly call or we can use the vairables

let about = carinfo.bind(car2) // this is we can call
about()

function call() {
    return function () {
        console.log(" hi i m nityanand ")
    }
}

// call
call()    // out put is --- >  hi i m nityanand

//----------------- Call method ----------------
console.log("--------------- Call Method ---------------")

let student = {
    name: "nityanand",
    class: 12,
    medium: "english",
    marks: "[45,60,70,55,60]",

}
// calpercnt = function () {
//     return (this.marks.reduce(function (acc, el) {
//         return acc + el
//     }, 0) / 500) * 100
// }

let student2 = {
    name: "sumit",
    class: 12,
    medium: "english",
    marks: "[65,70,75,80,95,]"
}

yourmarks = function () {
    console.log(this.name + " your subject wise marks are " + this.marks)
}

yourmarks.call(student)

yourmarks.call(student2)

//---------------------  apply method ----------------
console.log("---------------- apply method ----------------------")

let army = {
    forcetype: "Indian Army",
    chief: "M.N.Narvane",
    position: 1
}

let airforce = {
    forcetype: "Air Force",
    chief: "V.R.Choudhary",
    position: 2
}

let navy = {
    forcetype: "Indian Navy",
    chief: "Karamvir singh",
    position: 3
}

defence = function (appoint) {
    console.log(`${appoint} ${this.chief} now you are the new head of ${this.forcetype}`)
}

defence.apply(airforce, ["welcome Sir Mr,"])
defence.apply(army, ["welcome Sir Mr,"])
defence.apply(navy, ["welcome Sir Mr,"])

//--1> Bind
//--2> Call
//--3> apply


let nb = {
    firstName: "nityanand",
    lastName: "bhosale",
    age: 22,
    callme: () => { ///this arro function are globally called and our window value of this is undefined
        console.log(this)
        console.log(this.firstName + " " + this.lastName)//--->this is (undefined + undefined) == NaN
    }
}
nb.callme()

let sb = {
    firstName: "nityanand",
    lastName: "bhosale",
    age: 22,
    callme: function () {
        console.log(this)
        console.log(this.firstName + " " + this.lastName)
    }
}
sb .callme()



