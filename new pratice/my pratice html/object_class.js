//Object laterial

// let nityanand ={

//     firstName:"nityanand",
//     lastName:"bhosale",
//     age:22,
//     rollNo:9
// }

// class Calculator {

//     name
//      addition = function(num1, num2){
//            console.log(num1 + num2);
//     }
// }

// class Person {
//     firstName= undefined
//     lastName=undefined
//     age=undefined
//     rollNo= undefined
// }

// let amolA = new Person()
// console.log(amolA)
// amolA.firstName = "amolA "
// amolA.lastName = "Rao"
// amolA.age = 23
// amolA.rollNo = 34
// console.log(amolA)

// let nitu = new Person()


//by the first methos written the object be like

let name ={
    firstName:"nityanand",
    lastName:"bhosale",
    age:22
}

let name2 ={
    firstName:"sadananad",
    lastName:"bhosale",
    age:24


}

let name3 ={
    firstName:"pradip",
    lastName:"pawar",
    age:24
}

//if i have to write objet repeted format for that we use the class

//template,blueprint===>object by defining the class

//setting the value outside the class

class Person{
    firstName=undefined
    lastName=undefined
    age=undefined
    rollNum=undefined
}

let nityanand_b = new Person()
console.log(nityanand_b)

nityanand_b.firstName="sourbh "
nityanand_b.lastName="ganguli"
nityanand_b.age=48
nityanand_b.rollNum=10
console.log(nityanand_b)

//constructor are used to set the property value at the time of object creation

console.log("------------By constructor-------------")

class Person2 {
    constructor(fn,ln,ag,rn){
        this.fullName =fn
        this.lastName=ln
        this.age =ag
        this.rollNum =rn
    }
}

let ms = new Person2("mahendrasingh","dhoni",48,7)
console.log(ms)

let sushant =new Person2("sushant","rajput", 36,8)
console.log(sushant)

// by using the set method

console.log("------------- By using the set Method ----------------p")


class Person3 {
    setFullNme(fn){
        this.firstName=fn
    }

    setlastname(ln){
        this.lastName=ln
    }

    setage(ag){
        this.Age =ag
    }

    setlangauge(lang){
        this.Langauge=lang
    }

    
}

let info =new Person3()
console.log(info)
info.setFullNme("nityanand")
info.setlastname("bhosale")
info.setAge=22
info.setLangauge="marathi"
console.log(info)


//Examples of the class type
console.log("---------------------------------------------")


class crops {
    name =undefined
    type =undefined
    period =undefined
}

let jowar = new crops()
console.log(jowar)

jowar.name ="jowar"
jowar.type ="rabi"
jowar.period ="4_months"

console.log(jowar)

let wheat =new crops()

wheat.name ="wheat"
wheat.type ="rabi"
wheat.period ="4_months"

console.log(wheat)


console.log("------------ by constructor method ---------------------")



class positions {
    constructor(chf,nm,rk){
        this.chief =chf
        this.name =nm 
        this.rank =rk
    }
}
console.log(positions)
let names = new positions("Army","m.n.naravane","chief of Army")
console.log(names)

let name1 =new positions("AirForce","V.R.Choudhary","chief of Airforce")
console.log(name1)

// by set method
console.log("--------------------------------------------------")

class ministers {
    setName(nm){
      this.Name =nm  
    }

    setMinistry(mist){
        this.Ministry =mist
    }

    setDuration(durt){
        this.Duration  =durt
    }
}
console.log(ministers)

let nitin = new ministers()
nitin.setName("nitin gdkari")
nitin.setMinistry("NHAI")
nitin.setDuration("6_years")

console.log(nitin)

let narendra = new ministers()
narendra.setName="nerendra modi"
narendra.setMinistry="person Affairs"
narendra.setDuration=6

console.log(narendra)


//-------------------- Set -----------------------
console.log("-------------------- Set --------------------")

//Arry object set
//set doest not stores the duplicate values

let set1 = new Set([2,4,6,8,10,6,8,4,12])
console.log(set1)


//there is the size is property of set

//console.log(set1.size)
// OR
let ab = set1.size
console.log(ab)

//we can add the elelment in the set by add

let ac = set1.add(16)
console.log(ac)

let ad =set1.add(18)
console.log(ad)

//we can delete the element from  set by using the delete method

set1.delete(18)
console.log(set1)

set1.delete(10)
console.log(set1)

// if you have to cheak the elelment are present or not

let cc=set1.has(15)
console.log(cc)

let dd =set1.has(2)
console.log(dd)

//if you have to clear the all set then

set1.clear()
console.log(set1)

//if you have to print the all

let set3 = new Set([4,2,6,8,10,4,6,8,2])
console.log(set3)


let numbers = [22,23,28,25,22,11,14,16,14,11,8,4,8,]


 setC =new Set(numbers)

console.log( Array.from(setC))




//------------------ Map method -------------------------

//Map ====> object property and method

let mapA = new Map()

console.log(mapA.size)

mapA.set([2,4,6,8,10],"Marks")
console.log(mapA)

mapA.set(true,"flower")
console.log(mapA)

mapA.set('nityanand',"firstname")
console.log(mapA)

let aa= mapA.has(true)
console.log(aa)

let bb = mapA.has(false)
console.log(bb)

// mapA.clear()
// console.log(mapA)

mapA.delete(true)
console.log(mapA)

//------------Another Map

let map2 =new Map([
   ["name","nityanand"],
   ["age",22],
   ["lastname","bhosale"],
   [{js:"javascript",j:"java"},2] 
])

console.log(map2)

console.log(map2.size)

//n if you have to print only keys

for(let info of map2.keys()){
    console.log(info)
}

//if you have to print only values

for(let val of map2.values()){
    console.log(val)
}

//if you have to print both keys and value

for(let all of map2.entries()){
    console.log(all)
}










