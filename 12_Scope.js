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

// first the function one until it invoke then one called it will create execution context 
// now username variable is created and it will be undefined function two will store as it is
// now it will go upper to username where value initialize by Roman
// and now function two invoke it will create again a excution context for function two 
// now const website variable has undefined  
// it will check the username is present in the local excution context or not if not it will search it in local scope or excution context or parent excution context 
// now it will go again and website now has lyrics.com value sote in website variable and console.log(username) which is roman print on the screen


function one()
{
    const username = "Roman"
    function two()
    {
        const website = "lyrics.com"
        console.log(username)
    }
    // console.log(website) // the website is not defined error will come it is reference error 
    two()
    
}
one()


// here there is two function but the catch is one is a normal function and other one is called Expression function 
// So Expression function is function where function is store in a variable and you can access it or invoke it by variable name
// but here one more catch in the normal function if you invoke a function first before function is initialized it will not going to give error
// let's try and see!!!

console.log(addOne(5));
function addOne(n)
{
    return n+1;
}

console.log(addTwo(5)); // but in the expression function where you put the function in the variable will create a error it will show refernce error that cannot access addTwo before intialization
const addTwo = function(n){ // because it is store in a variable and you cannot access any variable before initalized it
    return n+2;
}

