//---------- Difference in var, let , const ---------------

//The differences between var, let, and const variable declaration in JavaScript include:

//Variables declared with var and const are scoped to the immediate function body.
//Variables declared with the var keyword are hoisted. Hoisting means that the variable can be accessed in
//their enclosing scope even before they are declare
//Variables declared with the let keyword are block-scoped, 
//which means the variables will have scope to the immediate enclosing block.

//------------------ Var keyword ------------------------
console.log("------------ Var keyword ---------------")
//Def--->  Variables that are declared with var keyword have function scope.
//Function scoped here means that they can be accessed only inside the function in which they are declared,
// as showcased in the following

function myfun() {
    var x = 5;
    if (1) {

        var y = 10

        console.log(x);
        console.log(y);
    }
}

//call the function

myfun()

// if call the var outside the it is undefined

//console.log(x)     // x is not defined is its out put
//console.log(y)     // y is not defined is its out put

//---------- Hoisting of var in JavaScript ------------
//Variables declared with the var keyword are subject to hoisting.
// If we declare a variable (but do not initialize it) at the end of the function,
// the JavaScript runtime will move it to the top of its scope and, therefore,
//there will be no complaint by the runtime if we use that variable before being declared.

//------- Issues with var for Variable Declaration ------------------
//One of the issues is that the variables declared with the var keyword can be re-declared or updated in the same scope.
//This could lead to a serious problem if we declare another variable with the same name in the same scope;
//value will replace the old one. Check out the following code-snippet for illustration:

var color = "red"
var color = "orange"
console.log(color)    // output orange

var color = "blue"
console.log(color)    // output 

//Another issue with the var keyword is that if you declare a variable without the keyword var,
//then that variable will have global scope.

for (x = 0; x < Array.length; x++) {   //here index has the global scope
    // console.log(i)
}

//the JavaScript for loop will create variable x in the global scope. 


//----------------- Let Keyword ------------
console.log("----------- Let Keyword ------------------")

//let is the improved version of var. let eliminates all the issues of var that we have talked about in the previous section.
//let is Block Scoped
//The let keyword should be used in situations where you want to declare a variable that should be restricted to the block in which it is restricted
//Also, variables declared with the let keyword cannot be updated or re-declared. Here is an example of how to use let to declare variables in JavaScript:


function letfun() {
    let a = 10

    if (a == 10) {
        let b = 20

        // console.log(a)    // output is 10
        // console.log(b)    // // output is 20
    }
     console.log(a)    //output is 10 
    //  console.log(b)    // b is not defined (undefined)
}

letfun()

//Note:- that the variable b declared with the let keyword is not accessible beyond the if block in which it is declared. 
// If we would have declared it with the var keyword, then it would have been available,
//because var has global scope within a function

function Note(){

    // console.log(x)
    // console.log(y)

    // var y = 30;   // undefined
    // let x = 20;   // output Cannot access  'x' before initialization

}

Note()

function add(){
    let b = 10
    var c = 30

    console.log(b)
     console.log(c)
}
// console.log(c)   //output is undefined
// console.log(b)   //output is undefined

add()

//note:- Another thing to consider is that let cannot be used before its declaration. 
//        If you do so, it will result in a ReferenceError.

//---------- Hoisting of let --------------
// Variables declared with the let keyword are not subject to hoisting.

