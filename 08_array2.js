const firstArray = [1, 2, 3, 4, 5];
const secondArray = [6, [7, 8], 9, 10];

// the differnce between concat and spread operator is that concat creates a new array by merging two or more arrays, while the spread operator allows you to expand elements of an array into another array or function call.
// In spread operator you can modify or add elements to the new array, while concat does not allow that.


const combinedArray = firstArray.concat(secondArray);
console.log(combinedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const spreadArray = [...firstArray, ...secondArray];
console.log(spreadArray); // [1, 2, 3, 4, 5, 6, [7, 8], 9, 10]

const mergedArray = [1,2,3,4,5,[6,7,8,],9,10,11];
const flatArray = mergedArray.flat(Infinity);
console.log(flatArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// converting a string to an array using Array.from() method
console.log(Array.from("Rohit"));


// converting object to an array using Object.values() method

const convertArray = {
    name: "rohit",
    age : 25,
    rollno : 39
}
console.log(Object.keys(convertArray))
console.log(Object.values(convertArray))
console.log(Object.entries(convertArray))
// using spread operator in object
const convertArrayToObject = {...convertArray};
console.log(convertArrayToObject); // [{name: "rohit"}, {age: 25}]


// Converting an array to an object using spread operator and reduce method

const convertObject = ["rohit",25,true];

console.log({...convertObject}) // {0: "rohit", 1: 25, 2: true}

const obj = convertObject.reduce((acc,cur,index)=>{
    acc[index+1] = cur;
    return acc;
},{});
console.log(obj);


// Converting varaible in one array or store in one array

const name = "Hulk"
const lastname = "Hogan"
const die = "27/07/2025"

console.log(Array.of(name,lastname,die));