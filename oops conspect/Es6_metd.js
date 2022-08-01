// class Es6 methods
// 1> inheritance

//2> Encasulation

//3>polymorphism

//4>Abstraction // interface ---> typescript

//----------- Inheritance ----------------
//program one


class Grandfather {
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
    }

    fullName(){
        console.log(this.firstName +" "+ this.lastName)
    }
}

class Father extends Grandfather {
    greet(){
        console.log("Hello")
    }
}

let jotiram =new Father("bhagvan","bhosale")
console.log(jotiram)

console.log(jotiram.firstName)
console.log(jotiram.lastName)

jotiram.fullName()

let bhagvan =new Grandfather("bhagvan","bhosale")
console.log(bhagvan)

bhagvan.fullName()

//bhagvan.greet() //we can't call the child method  by its parent


console.log("*************************************************")
//---------- program two

class shahaji {
    constructor(fn,ln){
        this.firstName=fn
        this.lastName=ln
        
    }

    fullName1(){
        console.log(this.firstName+ " "+ this.lastName)
    }
}

class shivaji extends shahaji{
    constructor(sfn,ln,shifn){
        super(sfn,ln)
        this.sfirstName=shifn
    }

    fullName1(){
        console.log(this.sfirstName +" "+ this.lastName)
        super.fullName1
    }
}

let shivaji1 = new shivaji("shahaji","bhosale","shivaji")
console.log(shivaji1)

console.log(shivaji1.firstName)
console.log(shivaji1.lastName)
console.log(shivaji1.sfirstName)

 shivaji1.fullName1()

 //.fullName1()

 //--------program  three --------
 console.log("********************************")

 class Student{
     constructor(fn,ln){
         this.firstName=fn
         this.lastName=ln
     }

     studentName(){
         console.log(this.firstName+" "+this.lastName)
     }
 }

 class Teacher extends Student {
     constructor(fn,ln,slry){
         super(fn,ln)
         this.salary=slry
     }

     displaysalary(){
         console.log(this.salary)
     }

 }

 class Professor extends Teacher {
     constructor(fn,ln,slry,spec){
         super(fn,ln,slry)
         this.specilisation=spec
     }

     displayspecilisation(){
         console.log(this.specilisation)
         super.displaysalary
         super.studentName
         
     }
 }

 let nityanand =new Professor("nityanand","bhosale",45000,"chemistry")
 console.log(nityanand)

 console.log(nityanand.firstName)
 console.log(nityanand.lastName)
 console.log(nityanand.salary)
 console.log(nityanand.specilisation)

 nityanand.studentName()
 nityanand.displaysalary()
 nityanand.displayspecilisation()

 class TATA {
     constructor(onw,grp){
         this.owner =onw
         this.group =grp
     }
     groupName(){
         console.log(`${this.group},is all over india`)
     }
 }

 class Range_rover extends TATA {
     constructor(onw,grp,ncom){
         super(onw,grp)
         this.newCompany=ncom
     }

     Newcom(){
         super.groupName
         console.log(`${this.newCompany} is the new part of TATA`)
     }
 }

 class Jaguwar extends Range_rover {
     constructor(onw,grp,ncom,ncom2){
         super(onw,grp,ncom)
         this.newCompany2=ncom2
     }

     newOne(){
         super.Newcom
         console.log(`${this.newCompany2} is also the part of TATA `)
     }
     
 }

 let ratanji =new Jaguwar('Ratan TATA',"TATA Group",'Range_Rover','Jaugwar')
 console.log(ratanji)

 console.log(ratanji.owner)
 console.log(ratanji.group)
 console.log(ratanji.newCompany)
 console.log(ratanji.newCompany2)

 ratanji.newOne()
 ratanji.Newcom()
 ratanji.groupName()


 


