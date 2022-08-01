let students1 =["ram","sham","sunil","sumit","omkar","nityanand","omkar","pradip"]
//              -8      -7    -6      -5       -4      -3          -2       -1

let oo =students1.splice(2,3,"sangram","arjun","ishwar")
console.log(oo)
console.log(students1)

// let pp =students1.splice(0,2,"shubham","mahesh")
// console.log(pp)
// console.log(students1)

let numeric1 = [2,6,8,10,14,16,20,22,26,]

let hg =numeric1.find(function(el){
    return el > 20
})
console.log(hg)