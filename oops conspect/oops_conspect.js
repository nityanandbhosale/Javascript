

//we can  write the object by 4 methods

//1> object literal
//2> function constructor
//3> Es6
//4> object.creat()

//function constructor

let Person =function(nm,md,manu,col){
    this.name=nm
    this.model=md
    this.manufacture=manu
    this.color=col
}

let rover =new Person("range","sports",2021,["white","black","red","meroom"])
console.log(rover)

let mercidies = new Person("mercidies","benz",2020,["red","black","white","solo"])
console.log(mercidies)

console.log("-------------------------------------------")

let Crops =function(nm,ty,dur,vari){
    this.name=nm
    this.type=ty
    this.duration=dur
    this.variety=vari
    this.varietydisplay=function(){
        console.log(`variety is ${this.variety}`)
    }
}

let tomato =new Crops("tomato","kingdom","4_months","vaishali")
console.log(tomato)

//we have to know
//obj---> obj.__proto__===parent.prototype
console.log(tomato.__proto__===Crops.prototype)//true

console.log(Crops.prototype)

console.log(tomato instanceof Crops)// true

console.log("-------------------- solution ----------------------")

let Crops1 =function(nm,ty,dur,vari){
    this.name=nm
    this.type=ty
    this.duration=dur
    this.variety=vari
    // this.varietydisplay=function(){
    //     console.log(`variety is ${this.variety}`)
    // }
}

Crops1.prototype.varietydisplay=function(){
    console.log(`variety is ${this.variety}`)
}

let potato =new Crops1("potato","new","5_months","vision")
console.log(potato)

let ladyfinger =new Crops1("ladyfinger","sygenta","5_months","NH05")
console.log(ladyfinger)

//now call the method

potato.varietydisplay()

ladyfinger.varietydisplay()



// ------------------- function  Es6 method -----------------
console.log("-------------- Es6 Method -----------------")

let Employ =function(emn,ag,dep, emid){
    this.employName =emn
    this.age=ag
    this.department=dep
    this.employid =emid
}
Employ.prototype.showAge=function(){
    console.log(`the age is ${this.age}`)
}


let nityanand =new Employ("nityanand",22,"IT",236505)
console.log(nityanand)

nityanand.showAge()

let satyjeet =new Employ("satyajeet",23,"software",2325)
console.log(satyjeet)

satyjeet.showAge()

console.log(nityanand.age)
console.log(nityanand.department)

nityanand.age=23
nityanand.langauge="marathi"
nityanand.department="software"
delete nityanand.langauge
console.log(nityanand)

console.log('-------------------------------------------------')
// next example
class Employ2 {
    constructor(emn,ag,dep,){
        this.employName=emn
        this.age=ag
        this.department=dep
    }
     dispAge(){
        console.log(this.age)
    }
}

let pradip =new Employ2("pradip",23,"software")
console.log(pradip)

pradip.dispAge()

let omkar =new Employ2("omkar",24,"IT")
console.log(omkar)

omkar.dispAge()

//------------- Es6 ---------------
console.log("--------- Es6 -----------")

class Crop {
    name =undefined
    type=undefined
    period=undefined
}

let potato1 =new Crop()
console.log(potato1)

potato1.name="potato"
potato1.type="rabi"
potato1.period="4_months"

console.log(potato1)

// constructor method


class Person3 {
    constructor(nm,ln,ag,lang){
        this.name=nm
        this.lastname=ln
        this.age=ag
        this.langauge=lang
    }
    showname(){
        console.log(`name is ${this.name}`)
    }
}

let ram =new Person3("nityanand","bhosale",22,"marathi")
console.log(ram)

ram.showname()

// ----- set methos -----------
console.log("---------- Set method ---------------")

class King{
    setName(nm){
        this.Name=nm
    }

    setBirth(brt){
        this.Birth=brt
    }

    setskill(skl){
        this.skill=skl
    } 
}

let sambhaji=new King()
console.log(sambhaji)

sambhaji.setName("dharmaveer shambhaji maharaj")
sambhaji.setBirth(1956)
sambhaji.setskill(["brave","strongest"])

console.log(sambhaji)

//--------- oops four conspect----------

//Encapsulation

//Inheritance

//Polymorphism

//Abstraction //Interface---typescript

//--------- Bank Example ------------
class Bank{
    constructor(accNm,accno,city,bal){
        this.accountname =accNm
        this.accountNo=accno
        this.city=city
        this.balance=bal
        this.tranction=[]
        
    }

    deposit(amount){
        this.balance = this.balance + amount
        this.tranction.push(amount)
        console.log(`your acc bal is ${this.balance}`)
        return this.balance
    }

    withdrawl(amount){
        if(this.balance > amount){
            this.balance = this.balance - amount
            this.tranction.push(-amount)
        }
        else{
            console.log("Insufficient balane")
        }
    }

    lasttentransction(){
        console.log(this.tranction.slice(-10))
    }
}

Bank.prototype.tranction1=function(){
    console.log(`this is your transctions ${this.tranction}`)
}

let accholder =new Bank("nityanand bhosale",6051919,"solapur",5000)
console.log(accholder)

accholder.deposit(500)
accholder.withdrawl(1000)
accholder.deposit(5000)
accholder.withdrawl(400)
accholder.deposit(500)
accholder.withdrawl(3000)
accholder.deposit(500)
accholder.withdrawl(1000)
accholder.deposit(10000)
accholder.withdrawl(5000)

accholder.lasttentransction()

let sushant =new Bank("sushant chavan",50619,"pune",10000)
console.log(sushant)

sushant.deposit(500)
sushant.withdrawl(1000)
sushant.deposit(200)
sushant.withdrawl(400)
sushant.withdrawl(600)

accholder.tranction1()














