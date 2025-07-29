// Learning Function

// the output of this code is 7 and undefined 
// why because you are not returning value from the function just printing it 
// so the result will give you undefined because it will not get any return value from the addTwoNumber function


function addTwoNumber(number1,number2)
{
    console.log(number1+number2)
}

const result = addTwoNumber(2,5);

console.log(`This is console.log output : ${result}`);


// this is another function with same logic but this time we are returning the answer or output
// to the result variable 
function addTwoNumber(number1,number2)
{
    return number1+number2;
}

const answer = addTwoNumber(2,8);

console.log(`This is returning value from the function : ${answer}`);

function userLoggedIn(userName)
{
    if (!userName)
    {
        console.log("Please Provide Username")
        return
    }
    return `${userName} just Logged In`
}
const who = userLoggedIn(undefined);
console.log(who);


// Passing object as a argument in the function parameter 


const handleObject= {
    username : "sam",
    price : 399
}

function userdetail(user){
    console.log(`my name is ${user.username} and I Bought the course at ₹${user.price}`);
}

userdetail(handleObject)

// Passing Array as a argument in the function parameter

const myArray = [200,300,400,500];

function arrayData(newarray)
{
    return `Hello i want first value of the array ${newarray[0]}`
}

console.log(arrayData(myArray))