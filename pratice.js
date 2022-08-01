// pratice function

 function toCelsius(f) {
    return (5/9) * (f-32);
  }
  console.log(toCelsius(150))
  console.log(toCelsius(100))
  console.log("the temperature is " + toCelsius(110)  + " celcius")

  //Practice object

  let students =[
    {
      fullName:"pradip pawar",
      age: 23,
      sub:["maths","scince","history"],
      marks:[80,65,70] 
    },
    {
      fullName:"sadanand bhosale",
      age: 24,
      sub:["history","scince","geography","marathi"],
      marks:[75,60,85,80]
    },
    {
      fullName:"ram pawar",
      age: 21,
      sub:["geography","scince","maths"],
      marks:[90,60,75]
    },
    {
      fullName:"Sushil shinde",
      age: 22,
      sub:["marathi","history","economics","polity"],
      marks:[70,80,65,75]
    }
  ]

console.log(students)
console.log(students[2])

//update method
console.log("****************************")

students[2].sub.push("polity")
console.log(students)

students[2].marks.push (80)
console.log(students)

//Add method
console.log("************************")

students[1].distination = "first class"
console.log(students)

//delete method
console.log("********************************")

delete students[1].distination
console.log(students)

// 1 students have  num of sub

for(let i =0; i<students.length; i++){
  console.log(students[i].fullName + " : " + students[i].sub.length )
}

//foreach method for 1
console.log("*************************")

//students have subject marathi and 80 marks 

let result =students.filter(function(el,i,arr){
  return el.sub.includes('marathi') && el.marks.includes(80)
}).forEach(function(el){
  console.log(`the name is ${el.fullName}`)
})  








  