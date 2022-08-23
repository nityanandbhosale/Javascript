// remove the duplicate from the arry

let num =[ 1,2,3,4,1,2,3,1,4,6,1,5,1,2,3,1,2,3]
let unique =[]
let sep = num.filter(function(each,el){
     if(num.indexOf(el) !==-1){
        unique.push(el)
     } 
    
})

console.log(unique)

// by the second method using the set

function uniqueArr(num){
    let arryunique =[...new Set(num)]
    console.log(arryunique)
}

uniqueArr(num)