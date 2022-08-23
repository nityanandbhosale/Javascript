let vegetables = ["tomato", "potato", "carrot", "onion"]
let A = vegetables.length
console.log(A);
vegetables.push("ladyfinger")
console.log(vegetables);
vegetables.unshift("cucumber")
console.log(vegetables);
vegetables.pop()
console.log(vegetables);
vegetables.shift()
console.log(vegetables);
let bbb = vegetables.includes("Tomato")
console.log(bbb);
let ccc = vegetables.includes("tomato")
console.log(ccc);

//Methods

let number = [22, 45, 95, 85, 52, 12, 36]
console.log(number[0])
console.log(number[4])
console.log(number.length)

console.log("LOOP STARTED FROM HERE>>>>>>>")
//Array
var arr = [5, 12, 55, 4, 56, 42, 78, 10, 8, 20, 41]

for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
                console.log(arr[i])
        }
}


for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
                console.log(arr[i])
        }
}

let city = ["mumbai", "pune", "nagpur", "solpur", "kolhapur"]
for (let i = 0; i <= city.length; i++) {
        console.log(city[i])
        console.log(city[3])

}

console.log("----reversed----")
for (let i = city.length; i >= 0; i--) {
        console.log(city[i])
}
let state = ["Maharashtra", "Punjab", "Up", "Mp", "Gujrat"]
let aa = state.indexOf("Punjab")
console.log(aa)
let bb = state.indexOf("Mp")
console.log(bb)

let cc = state.reverse()
console.log(cc)

// sort
let dd = state.sort()
console.log(dd)

// join
let info = ["nityanand", "bhosale", "7522957602"]
let ff = info.join("-")
console.log(ff)
