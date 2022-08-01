// in this we can destructure object 

// Es6 classs

let mycar = ["mersidies","audi","BMW","fortuner","scorpio"]

// now destructure the object and  call the character in object

let [mr,au,bm,frc,scr] = mycar

console.log(mr)
console.log(au)
console.log(bm)
console.log(frc)
console.log(scr)


console.log("-------------------------------")
let evennum = [10,12,14,16,18,20,22]

let [a0,a1,a2,a3,a4,a5,a6] = evennum

console.log(a0)
console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)


console.log("---------------------------------------------------")
// suppose there is arry inside the  arry then

let states = [["maharashtra","karnatak","chattisghar"],["mumbai","banglore","raipur"]]

let [far,lar] = states

console.log(far)
console.log(lar)

//if you have to access the char arry inside the arry then

let [[mh,kr,ch],[mu,ban,rai]] = states

// this will gives the values of all the char inside arry
console.log(mh)
console.log(kr)
console.log(ch)

console.log(mu)
console.log(ban)
console.log(rai)

console.log("------------------------------")
// some logical exm

let x = 100
let y = 200
console.log(x)
console.log(y)


// if we have to interchange the values of the x and y

//----------- temp ---------

temp = x
x = y
y = temp


console.log(x)
console.log(y)

let name = "nityanand"
let sername = "bhosale"

console.log(name)
console.log(sername)

// by temp
temp = name
name = sername
sername = temp

console.log(name)
console.log(sername)

console.log("-------------------------")

//-- another example ---

let country = "india";
let contenent ="asia";

// console.log(country)
// console.log(contenent)

// now we interchange the values of the vairables

[country,contenent]=[contenent,country];

console.log(country)
console.log(contenent)


//------ destructure the object -------
console.log("---------------------------------")

let info = {
    name1:"nitin gadkari",
    ministry: "NHAI",
    consituency:"nagpur"

}
let {name1:nm,ministry:min,consituency:con} = info

//  console.log(name1)
//  console.log(ministry)
//  console.log(consituency)

console.log(nm)
console.log(min)
console.log(con)

let crops ={
    name2:"tomato",
    type:"vaishali",
    period:"4_months"
}

let {name2:na,type:ty,period:per} = crops
// console.log(name2)
// console.log(type)
// console.log(period)

console.log(na)
console.log(ty)
console.log(per)

//Combination the arry inside the  object

let collection = [
    {
        car:"swift",
        company:"suzuki",
        year:2020
    },
    {
        car2:"baleno",
        company2:"suzuki",
        year2:2019
    }
]

///---------destructure

let [{car:cr,company:com,year:yr},{car2:cr2,company2:com2,year2:yr2}] = collection

// console.log(car)
// console.log(company)
// console.log(year)

// console.log(car2)
// console.log(company2)
// console.log(year2)

console.log(cr)
console.log(com)
console.log(yr)

console.log(cr2)
console.log(com2)
console.log(yr2)






