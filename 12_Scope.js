// let's learn about Scope
let a = 10; // this is global variable you access it in the scope out of the scope
const e = 50; // this is global variable you access it in the scope out of the scope
var f = 60; 
if(true)
{
let a = 25; // let it has only access in this scope
const b = 35; // const it has only access in this scope
var c = 45; // var You can access it anywhere in the scope and out of the scope
console.log("Inner Scope: "+a)

}


console.log("Outter Scope: ",a); // let it will give you error refernce error that a is not defined
// console.log(b); // const it will give you error refernce error that a is not defined
console.log(c); // var it will not provide the error because you can access the variable from anywhere that's why nowadays people avoid using var