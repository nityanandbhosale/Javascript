// LOOPS IN JAVA SCRIPT

//          
let name = "nityanand bhosale"

//length of string
console.log(name.length) //

// by loop you can easily print all character in string

//How loops work
//for(inatilization;condition cheak;incriment or decrement)

for(let i=0; i<name.length; i++){
    //console.log(i) //log(i) gives the index number only
console.log(name[i]) //log(names[i]) gives the all character in string
}

// Another example

let state = "Maharashtra"

for(let i=0; i<state.length; i++){
    console.log(state[i])
}

console.log("---------------------------------------------")

//If i have to reverse this arry

for(let i=state.length-1; i>=0; i--){
    console.log(state[i])
}

console.log("---------------------------------------------")

// Some other merhods in strings

//1> ToUpperCase()

let sport ="kabbadi"
//if you have to print the string in capatil latters then

let capt = sport.toUpperCase() //actin -to convert all character in capatil
console.log(capt)              // return - same string

//Again you have print this string into the small latters then

//2> toLowerCase

let small =sport.toLowerCase() // action -convert string into small 
console.log(small)             // return- same string

//3> includes

let country = "finland"
//we have to find the character which is included in the string then

let incl = country.includes("in")
console.log(incl)

let idnf = country.includes("In")
console.log(idnf) //it is also case sensitive

//STRING OBJECT
 let firstName = "Nityanand"
 let lastName = "Bhosale"
 let age = 22

 console.log("---------- String ---------------")
 //now cheak the type
 console.log(typeof(firstName))
 console.log(typeof(lastName))
 console.log(typeof(age))

 // method chaining
 //means use two or three method at a time

 let fort ="Raygad"

 let change =fort.toLowerCase().toUpperCase().length
 console.log(change)
//in this first string convert into small letters and after into capatal letters and last give the length of string

let dist ="Solapur"

let apply = dist.toUpperCase().toLowerCase().length.toLowerCase
console.log(apply)

//it says undefined because you cant convert number into string

console.log("------------ slice --------------------")
//SLICE METHOD
//example-

//            0          1       2         3          4     5       6
let vegtb =["tomato","carrot","cabbige","flower","potato","pea","chile"]
//            -7        -6       -5       -4        -3     -2       -1

console.log(vegtb.slice(0,5))
console.log(vegtb.slice(2,4))
console.log(vegtb.slice(0))
console.log(vegtb.slice(1,7))
console.log(vegtb.slice(-5,-1))
console.log(vegtb.slice(-7))
console.log(vegtb.slice(-2,-6)) //this function op is empty arry cause there is ending position in front of starting
//                                     means arry can define from left to right

console.log("---------------------- TRIM METHODS -----------------")
// TRIM methods
//1> trim

let city = " Ahamadnagar "

console.log(city.length)

//if ypu have to remove the spaces from first and last then use trim method
let remv = city.trim()
console.log(remv)
console.log(remv.length)

//if i have to remove the spaces from the first

let Rfirst = city.trimStart()
console.log(Rfirst)
console.log(Rfirst.length)

//if you have to remove the spaces from last

let Rlast = city.trimEnd()
console.log(Rlast)
console.log(Rlast.length)

console.log("----------------- IndexOf -------------p")
//----------- INDEXOF method---------------p

let book = "battel of panipat"

//if i need to indexOf any character in the string

let need = book.indexOf("tt")
console.log(need)

let nee = book.indexOf("p")
console.log(nee)

let find =book.indexOf("i")
console.log(find)

//Count the vowelsin string

//conditional statement

console.log("----------------------------------------")

let name1 ="NITYANAND"
function vowels(name1){
    count = 0
for(let i=0; i<name1.length; i++){
    //name1[i] =name1[i].toLowerCase()
    if(name1[i] == "a" || name1[i] =="e" || name1[i] =="i" ||name1[i] =="o" || name1[i] =="u"){
        count = count + 1
    }
}
return count
}
let bb =vowels("nityanand jotiram bhosale")
console.log(bb)

//We can reverse the string 

let state1 ="maharashtar"

//reverse
reverse = ""
for(let i=state.length-1; i>=0;i--){
    console.log(state1[i])
    reverse =reverse + state1[i]//here you will get the string reverse in one line
}
console.log(reverse)

for(let i=state1.length-1; i>=0; i--){
    console.log(state1[i]) //here you will get the string reverse in one by one line
}

//Another method

reverse =""
for(let i=0 ;i<state1.length; i++){
   //console.log(state1[i])
    reverse =state1[i] + reverse //this will also gives the return arry

}
console.log(reverse)

//------------Spilt method------------
console.log("-------- Spilt method-------")

let  myName ="nityanand bhosale"

let nb = myName.split("a") //[ 'nity', 'n', 'nd bhos', 'le' ] this is out put
console.log(nb)

let sb = myName.split(" ")  //[ 'nityanand', 'bhosale' ] this is out put
console.log(sb)

//REPLACE METHOD

let newchange = "Chatrapati shivaji maharaj is the great king"

let aa =newchange.replace("great","brave")
console.log(aa) //Chatrapati shivaji maharaj is the brave king

let cc = newchange.replace("shivaji","sambhaji")
console.log(cc)  //Chatrapati sambhaji maharaj is the great king

//REPEAT METHOD

let fort1 ="Raygad is the capatil of swaraj"

let ss = "swaraj ".repeat(5)
console.log(ss)

let pp =fort1.repeat(5)
console.log(pp)

//input type ------------------- output multiple

//condition 
//<=10----20% discount
//>10 ----30% discount

let numTickets = 15
function discount(numTickets){
    if(numTickets<=10){
    console.log('20% discount')
    }
    else if(numTickets>=10){
    console.log('30% discount')
    }
    return numTickets
}

let qq =discount(5)
console.log(qq)

let ee =discount(25)
console.log(ee)

let pq=discount(30)
console.log(pq)


 






