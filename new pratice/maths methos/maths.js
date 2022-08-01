// cheak the vairous methods of maths

console.log(3 == 3.0)     // return boolean value
console.log('3')
console.log(typeof('3'))
console.log(Number('3'))
console.log(typeof(Number('3')))
console.log(+'3')

// seperate the number fron string
let a = parseInt('30nitu')
console.log(a)
let b = parseInt('Nityanand2000')
console.log(b)

//---------------------
let c = parseFloat('20.5budget')
console.log(c)

let d = parseFloat('lackof20.3')
console.log(d)

console.log('---------------------------------------')
// NaN method

let e = Number.isNaN('20')  //false
let f = Number.isNaN(50)     //false
let g = Number.isNaN(+'100') //false
let h = Number.isNaN(100/0)    //false
let m = Number.isNaN('300ka')   //false


console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(m)

console.log('------------------------------')
// for finiate

let i = Number.isFinite('20')   //false
let j = Number.isFinite(50)   //true
let k = Number.isFinite(+'100') //true
let n = Number.isFinite(100/0)   //false

console.log(i)
console.log(j)
console.log(k)
console.log(n)

console.log('---------------------')
// isInteger

let o = Number.isInteger(100)    //true
let p =Number.isInteger('200')   //false
let q = Number.isInteger(50.5)   //false
let r = Number.isInteger(200/0)   //false

console.log(o)
console.log(p)
console.log(q)
console.log(r)

// the squre of any number
console.log(Math.sqrt(625))
console.log(25**2)

console.log('--------------------------------------')
// trunc
console.log(Math.trunc(40.5))    // 40
console.log(Math.trunc(50))     // 50
console.log(Math.trunc(-20.5))  // -20
console.log(Math.trunc('50.5')) // 50
console.log(Math.trunc('-500.05'))   //-500

console.log('------------------------------')
// Ceil
console.log(Math.ceil(2.1))
console.log(Math.ceil(-4.5))
console.log(Math.ceil(100))
console.log(Math.ceil('200'))
console.log(Math.ceil('-500.05'))
console.log(Math.ceil(-500.05))
console.log(Math.ceil('check20.5'))   //NaN

console.log('--------- Floor ---------------------')

console.log(Math.floor(36.5))
console.log(Math.floor(50))
console.log(Math.floor(-50.6))
console.log(Math.floor('70.9'))
console.log(Math.floor('-30.05'))

console.log('-------------- Round -----------------')

console.log(Math.round(20.5))
console.log(Math.round(30.4))
console.log(Math.round(30.6))
console.log(Math.round(-20.5))
console.log(Math.round(-30.4))
console.log(Math.round(-30.6))

console.log('------------ Fioxed -----')

let num = 3.1462546
console.log(num.toFixed(3))      //
console.log(22.726.toFixed(1))   //22.7
console.log(31.0169.toFixed(1))  //31.0
console.log(31.0169.toFixed(0))  // 31

// value of  pi
console.log(Math.PI)      //3.141592653589793