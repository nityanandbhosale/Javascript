//---------------- Class ------------------

class candidate {
    constructor(fn, ln, cty, marks) {
        this.firastName = fn
        this.lastName = ln
        this.city = cty
        this.marks = marks
    }

    calPercentage() {
        return (this.marks.reduce(function (acc, el) {
            return acc + el
        }, 0) / 500) * 100
    }
}

let marks = [[50,60,50,60,80], [50, 60, 50, 60, 50], [80, 80, 80, 80, 80], [90, 90, 80, 80, 80], [50, 50, 60, 70, 60]]
console.log(candidate)
// let perct = (marks.reduce(function(acc,el){
//     return acc + el[4]
// },0)/500)*100
// console.log(perct)


let student = []
for (let i = 0; i < marks.length; i++) {
    console.log(i + 1)
    let newobj = new candidate(`nityanand-${i + 1}`, `bhosale-${i + 1}`, `pune-${i + 1}`, marks[i])
    student.push(newobj)
}
console.log(student)


// now calculate the percentage arry
let percentArry = []
for (let i = 0; i < student.length; i++) {
    percentArry.push(student[i].calPercentage())
}
console.log(percentArry)
// console.log(calPercentage)

//NOw calculate the avarage percentage 

console.log(percentArry.reduce(function(acc,el){
    return acc + el
},0)/student.length)

//Print name of the every student
student.forEach(function(el){
    console.log(el.firastName)
})

console.log("----------------------------")
//Print lasName of the every student
student.forEach(function(el){
    console.log(el.lastName)
})

console.log("----------------------------[")
//Print the percentage of the every student
student.forEach(function(el){
    console.log(el.firastName + " " + el.calPercentage() + '%')
})

// Higest And Lowest marks of  student

console.log(percentArry)
let perct = percentArry
let min = perct[0]
let max = perct[0]

for(let i=0;i<perct.length; i++){
    if(perct[i]<min){
        min = perct[i]
    }
    else if(perct[i]>max){
        max = perct[i]
    }
}

console.log(min)
console.log(max)

console.log("-------------------------------")
//print the student have the max marks
console.log(student.find(function(el){
    return el.calPercentage()==min
}).firastName)

//print the student have the max marks
console.log(student.find(function(el){
    return el.calPercentage()==max
}).firastName)

//print the aqdditional langauge to every student

console.log(student.forEach(function(el){
    return el.langauge ="Hindi"
}))

console.log(student)