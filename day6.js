//let arrys method

let info =["nityanand","bhosale","solapur","maharashtra",22]
console.log(info)
info.push("marathi")
console.log(info)

info.unshift("Mr")
console.log(info)
 
//update
console.log("update***********")
info[1] ="sadanand"
console.log(info)

//deleted method
console.log("deleted method**************")

info.pop()
console.log(info)

info.shift()
console.log(info)

info.splice(3)
console.log(info)

//Arry stores the value by index

//Object laterial method
console.log("Object laterial method******************")

//retrive

//Add

//Delete

//Update

let info1 ={
    firstName:"dadasaheb",
    lastName:"falke",
    noFilms:55,
    Age:75
}
console.log(info1)

//Retriev 
//dot notation and bracket notation

//ex
//objName.property -- dot notation
//obj["Age"]--bracket notation

console.log(info1.lastName)

console.log(info1["firstName"])

//Update (dot notation and bracket)

info1.firstName ="sushant"
console.log(info1)

info1["lastName"] = "rajpoot"
console.log(info1)

//Add (dot and bracket notation)
console.log("Add**********")

info1.firstName ="mahendrasingh"
info1["lastName"] = "Dhoni"
info1.Age = 45
info1["lang"] = "Hindi"
info1.city ="Mumbai"
info1["passion"] = "crickter"
console.log(info1)

//delete (dot and bracket notation)
console.log("Delete method***************")

delete info1.noFilms
console.log(info1)

delete info1.lang
console.log(info1)

delete info1["city"]
console.log(info1)

// Object 2
console.log("objet 2 example*************")

let cars ={
    name:"Audi",
    model:"4DSS"
}
console.log(cars)

//Add
cars.engine ="500hp"
console.log(cars)

cars["colour"] = "Black"
console.log(cars)

//update******************
cars.name = "Range rover"
console.log(cars)

cars["engine"] ="700hp"
console.log(cars)

//delete********************
delete cars.colour
console.log(cars)

delete cars["model"]
console.log(cars)

//objet 4 ex***************************
console.log("Object 4 ex************************")

let info3 ={
    fullName:"nityanand bhosale",
    age: 22,
    skill:["python,java script"]
}
 console.log(info3)

 //for(let skill in info3){
   //  console.log(skill,info3[skill])
 //}
 console.log(info3.skill)
 console.log(info3['skill'])

 //object 5 ex
 console.log("object 5 ex*********************")

 let students = [
     {
         fullName1: "nityanand bhosale",
         city : "pune",
         age : 22,
         skills : ["python","js","html","css"]
     },
     {
         fullName1: "rahul jadhav",
         city : "mumbai",
         age : 24,
         skills:["css","html","java"]
     },
     {
         fullName1: "pradip chavan",
         city : "pune",
         age : 26,
         skills:["js","python","css","html"]
     },
     {
         fullName1: "ram pawar",
         city : "nagpur",
         age : 25,
         skills: ["java","css",]
     }
 ]

 //1 problem change the city of rahul to banglore

 console.log(students[1])

 students[1].city ="banglore"
 students[1]["city"]= "banglore"
 console.log(students)

 students[3].age =27
 console.log(students)

 //disply num of skills for all users

 for(let i = 0; i < students.length; i++){

    console.log(students[i].fullName1 + ":" + students[i].skills.length)
 }
 //foeach method
 console.log("Foreach methos***********")

 students.forEach(function(el){
     console.log(el.fullName1 + ":" + el.skills.length)
 })

 //Name of person belong to city pune
 console.log("***************************************")

 students.forEach(function(el){
     if (el.city == "pune"){
         console.log(el.fullName1)

     }
 })

  let punearry =students.filter(function(el){
     return el.city == "pune"
 })

 punearry.forEach(function(el){
     console.log(el.fullName1)
 })

 // person belongs to pune and knowns python and js
 console.log("*************************************")
  
 let bb = students.filter(function(el){
     return el.city === "pune" &&
     el.skills.includes("python","js")
 })

 bb.forEach(function(el){
     console.log(el.fullName1)
 })

 












