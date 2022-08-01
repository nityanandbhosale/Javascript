//Decision statement or conditional statement

//one entity with different changes in the outputs----> conditional statement

// if(condition){
//     if line is true execute this closed

// }
// else{
//     this line of will be excuted
// }

//--------- Truthy Values------------

//Truth values ===> 2<3 , True , 1 , -(any num) , Hello , Bye , "any string"

//False values===>2==='2', False , NaN , Undefined , Null , 0,

if(2<3){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//-----------------------------------------
if(5>4){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//-------------------------------------
if(2==='2'){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//-----------------------------------------
if(false){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//---------------------------------------
if(true){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//------------------------------------------
if(NaN){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//----------------------------------------
if(undefined){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//------------------------------------------
if(null){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//------------------------------------------
if(0){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//-----------------------------------------
if(1){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//-----------------------------------------------
if(7=='7' && 7==='7'){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//----------------------------------------------
if(-20){
    console.log("Hello")
}
else{
    console.log("Bye")
}
//----------------------------------------------
if("nityanand is good person and he can do any thing in his life"){
    console.log("Hello")
}
else{
    console.log("Bye")
}

//----------------- Conditions cheak-------------

console.log("**************************************************")

//tn>0 && tn<=5 =====> 5%
//tn>5 && tn<=0 ===>10%
//tn>10 ====>20%

// let tn =4  //here in theis case cheak the all condition up to else

// if(tn>0 && tn<=5){
//     console.log("5% discount")
// }
// if(tn>5 && tn<=10){
//     console.log("10% discount")
// }
// if(tn>10){
//     console.log("20% discount")
// }
// else{
//     console.log("Please enter correct ticket no")
// }

console.log("*********************************")
// use the if and elseif

let tn=1

if(tn>0 && tn<=5){
    console.log("5% discount")
}
else if(tn>5 && tn<=10){
    console.log("10% discount")
}
else if(tn>10){
    console.log("20% discount")
}
else{
    console.log("Please enter correct ticket no")
}

//---------------- Ternary Operator -------------
console.log("----------------------------------------")

//by conditional  method

//let king ="shivaji Maharaj"
//let king="shambhaji Maharaj"

// if(king=="shivaji Maharaj"){
//     console.log(king + " welcome")
// }
// else{
//     console.log("Not Welcome")
// }

//------------- By the ternary method-----------

//let king="Shambhaji maharaj"
let king ="shivaji maharaj"
king==="shivaji maharaj"? console.log(king + " welcome"):console.log("Not Welcome")

//let car ="rover"
let car="BMW"

car==="rover"? console.log(car +" is Aowsome car"):console.log("little bit but good")

//------- Example -------------
let num = 26
let ans;

if(num > 25){
    console.log("num is greater than 25")
}
else{
    console.log("num is less than equal to 25")
}
//----------------------------------------------
if(num > 25){
    ans = "num is greater than 25"
}
else{
    ans = "num is less than equal to 25"
}
console.log(ans)

//----------------p Switch Case ----------------
console.log("------------------- Switch Case ---------------------")

// let places ="gate way of india"
let places ="juhu"
switch(places){
    case "gate way of india":
    case "CST":
        console.log("Mumbai")

    case "taj mahal":
        console.log("Agra")
    
    case "raygad":
        console.log("raygad village")

    case "sundarban":
        console.log("kolkatta")

    default:
        console.log("Enter the correct place")
}

let vegetables ="palak"

switch(vegetables){
    case "potato":
    case "groundnut":
    case "carrot":
    case "bit":
        console.log(" in ground")
        break

    case "palak":
    case "methi":
        console.log("leafy")
        break

    case "tomato":
    case "cabbige":
        console.log("on ground")
        break

    case "apple":
    case "banana":
    case "orange":
        console.log("fruits")
        break
    default:
        console.log("enter the correct vegetables")
}