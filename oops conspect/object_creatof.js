// we can written the object by the  different methods

// 1> object literal
console.log("-------------- object literal -----------------")

let person = {
    name: "nityanand",
    lastname: "bhosale",
    age: 22,
    skill: "[js,python,html,cypress]",
    totalskill:function(){
        console.log(`this  is your ${this.skill} skills`)
    }
}

console.log(person)
person.totalskill()

//         function constructor
console.log("------------ Function constructor--------------")

let Car = function (nm, modl, manfct, colr) {
    this.name = nm
    this.model = modl
    this.manufacture = manfct
    this.color = colr

    this.newcar = function() {
        console.log(`this car model is ${this.model}`)
    }
}

let rover = new Car("range", "sports", 2019, "red")
console.log(rover)
rover.newcar()

//------------- Es6 Class ---------------
console.log("--------------- Es6 Class ---------------------")

class Crops {
    constructor(name,type,period,useful){
        this.name=name
        this.type=type
        this.period=period
        this.useful=useful
     }

     season(){
         console.log(`${this.name} can grow in all seasons`)
     }
}

let tomato =new Crops("tomato","vaishali","4_months","daily")
console.log(tomato)
tomato.season()

//------------------ Object.Creat() method --------------------
console.log("---------------- object.Creat() -------------")

let car =Object.create({})
console.log(car)

// in object.creat of method we can 
//retrive
//add
//update
//delete

car.name ="range rover"
car.model="sports"
car.manufacture=2019
car.color="red"

console.log(car)
car.name="BMW"
car.color="black"
car.regno=236505

console.log(car)
delete car.regno
console.log(car)

//--------- object create method with prototype
console.log("-----------------------------------------------")

let type  = {
    callme:function(){
        console.log("this is aowsome")
    }

}

let mumbai = Object.create(type)

mumbai.callme()
console.log(mumbai)
console.log(mumbai.__proto__)
console.log(mumbai.__proto__===type.prototype)
// console.log(type.prototype)

// if you have to fill the info in  object then
console.log("---------------------------------")

let add = {
    myAge:function(){
        console.log(2022 - 2000)
    },
    myinfo( name,lastnm,age,city){
        this.name=name
        this.lastname=lastnm
        this.age=age
        this.city=city
    },
    myAge2(){
        console.log(2022 - 1998)

    }
}

let nityanand = Object.create(add)
nityanand.myinfo("nityanand","bhosale",22,"solapur")
console.log(nityanand)
nityanand.myAge()

let sadanand = Object.create(add)

sadanand.myinfo("sadanand","bhosale",24,"solapur")
console.log(sadanand)
sadanand.myAge2()





