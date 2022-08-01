// ---------- Example -----------

let students = [
    {
        firstName: "nityanand",
        lastName: "bhosale",
        age: 22,
        skills: ["html", "css", "js", "python"],
        city: "solapur",
        family: {
            father: "jotiram",
            mother: "kanchan",
            sister: "swapnali",
            brother: "sadanand"
        }
    },
    {
        firstName: "vijay",
        lastName: "shinde",
        age: 34,
        skills: ["js", "java", "css"],
        city: "mumbai",
        family: {
            father: "shriram",
            mother: "jyoti",
            sister: "pratiksha",
            brother: "sunil"
        }
    },
    {
        firstName: "rohit",
        lastName: "pawar",
        age: 30,
        skills: ["css", "java", "html", "python", "js"],
        city: "pune",
        family: {
            father: "narayan",
            mother: "sita",
            sister: "pooja",
            brother: "ramesh"
        }
    },
    {
        firstName: "jayesh",
        lastName: "sawant",
        age: 35,
        skills: ["js", "python", "html"],
        city: "kolhapur",
        family: {
            father: "satish",
            mother: "mangal",
            sister: "pragti",
            brother: "sumit"
        }
    }
]
// call the arry method

// have to print firstName and 

students.forEach(function (el) {
    console.log(el.firstName + " " + el.city)
})


// let info =students.forEach(function(el){
//     return (el.firstName +" "+el.city)
// })
// console.log(info)

// have the firstname and num of skills

students.forEach(function (el) {
    console.log(el.firstName + " " + el.skills.length)
})

console.log("-----------------------------[")
//have students belongs to pune and its name

students.forEach(function (el) {
    if (el.city == "pune") {
        console.log(el.firstName + " " + el.lastName)
    }
})

console.log("----------------------------------")
// Avarage age of all users
let avarage = students.reduce(function (acc, el) {
    return acc + el.age
}, 0) / students.length
console.log(avarage)

console.log("------------------------------------------")
// students should have belongs to the pune or solapur have python skill

students.filter(function (el) {
    return el.city == "pune" || el.city == "solapur" && el.skills.includes("python")
}).forEach(function (el) {
    console.log(el.firstName + " " + el.lastName)
})

console.log("----------------------------------------------")
//students name and its family count

students.forEach(function (el) {
    let count = 0
    for (let keys in el.family) {
        count = count + 1
    }
    console.log(el.firstName + " " + el.lastName + " " + count)
})

// another one method

let familymemb =students.forEach(function(el){
    console.log(el.firstName +" "+ "family members are"+" "+ object.keys(el.family).length)
})
console.log("--------------------------")
//students name have maximum age

let max = 0
let name;

students.forEach(function (el) {
    if (el.age > max) {
        max = el.age
        name = el.firstName
    }
})
console.log(name)
console.log("*****************************")
// by using the sort method

let allage = students.map(function (el) {
    return el.age
}).sort()
let hage = allage[allage.length - 1]

console.log(hage)

console.log(students.find(function (el) {
    return el.age == hage
}).firstName)


//------------------------
students.forEach(function (el) {
    if (el.firstName == "nityanand") {
        for (let keys in el.family) {
            console.log(keys, el.family[keys])
        }
    }

})
// console.log(infov)


class Student {
    constructor(name,ln,age,city){
        this.name=name
        this.lastName=ln
        this.age =age
        this.city=city
    }
}

let nityanand = Student("nityanand",'bhosale',23,'solapur')

console.log(nityanand.name)









