alert("Hello Nityanand")

//<p id="one" class="boys">line two<\p>

let aa = document.querySelector('p')
console.log(aa)

let ab = document.querySelector('.boys')
 console.log(ab)

//id
let ac =document.querySelector('#one')
console.log(ac)

//by names
let ad =document.querySelector('p[names="five"]')
console.log(ad)

console.log("-------------------------------------------")
//now again
let a =document.querySelector('p')
let b =document.querySelector('.boys')
let c =document.querySelector('#one')
let d = document.querySelector('p[names="five"]')

//call
console.log(a)
console.log(b)
console.log(c)
console.log(d)

