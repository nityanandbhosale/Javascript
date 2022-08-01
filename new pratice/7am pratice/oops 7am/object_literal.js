// ------ methos in oops

//  1> object literal
//  2> function constructor
//  3> Es6 Class
// 4 > object.creat()

//------------------------- object literal -------------------------------

let nityanand = {
    firstName:"nityanand",
    lastName:"bhosale",
    age:22,
    city:"pune",
    birthyear:function(){
        console.log(2022 - this.age)
    }

}

// retrive this object by retrive method

console.log(nityanand.firstName)
console.log(nityanand.lastName)
console.log(nityanand.age)
console.log(nityanand.city)

// now the bracket notation

console.log(nityanand['firstName'])
console.log(nityanand['lastName'])
console.log(nityanand['age'])
console.log(nityanand['city'])

// Call the method

nityanand.birthyear()

//-------------------------------------------------
console.log("----------------------------------------------------")

let cars = {
    carName:"range rover",
    model:"sports",
    colour:"red",
    manufacture:2019,
    complyear:function(){
        console.log(2022 - this.manufacture + " years")
    }
}

console.log(cars)

cars.complyear()

let brother = {
    firstName:"sadanand",
    lastrName:"bhosale",
    birth:1998,
    city:"solapur",
    years:function(){
        console.log(2022 - this.birth + " years old")
    }
}

console.log(brother)
brother.years()


//------------------ Function constructor ----------------
console.log("----------------- Function constructor -----------------")

let chief = function(nm,post,state,year){
    this.name=nm
    this.post=post
    this.state=state
    this.year=year
}

let uddhav =new chief('uddhav takhery','CM','maharashtra',2019)
console.log(uddhav)








