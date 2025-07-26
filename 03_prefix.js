console.log(2+2+"2") // number add first then string concatenation
console.log(2+"2"+2) // string concatenation first then number addition
console.log("2"+2+2) // string concatenation first then number addition


let a = 3
let b = a++
console.log(a) // 4
console.log(b) // 3

let x = 3
let y = ++x
console.log(x) // 4 
console.log(y) // 4

let h = 30.5

console.log(typeof h)

const array  = [1, 2, 3, 4, 5]

console.log(typeof array) // object

const obj = {
    name: "Rohit",
    age: 25,
    isStudent: false
}
console.log(typeof obj) // object

const example = function() {
    console.log("This is a function")
}

console.log(typeof example) // function