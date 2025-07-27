const newArray = [1, 2, 3, 4, 5,"rohit"]; 

console.log(typeof newArray); // object

console.log(newArray[5]);
console.log(newArray.unshift(9)) // adds an element to the beginning of the array and returns the new length of the array
console.log(newArray); // [9, 1, 2, 3, 4, 5, "rohit"]
console.log(newArray.shift()) // removes the first element of the array and returns it

console.log(newArray.includes(0));

console.log(newArray);
const a = newArray.join(); // joins convert the array into a string and is type from object to string
console.log(a); // "1,2,3,4,5,rohit"
console.log(typeof a); // string


// the difference between slice and splice is that slice does not change the original array, while splice modifies it.

const array1 = [1,2,3,4,5];
console.log(array1);
console.log(array1.slice(1,3));
console.log("A : "+array1);

const array2 = array1.splice(1,3);
console.log(array2)
console.log("B : "+array1);



