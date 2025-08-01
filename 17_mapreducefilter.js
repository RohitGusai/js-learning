// now we come to the part where we are going to talk about map , filter and reduce array method

// first is map 
// map create a new array and you need to store it in a varaible and console log it it only return the new array 
// i am not recommed you to print the array using map method for that you can use forEach loop

const array = [1,2,3,4,5]

const myarray = array.map((item)=>{
    let num = item + 1
    return num
})
console.log(myarray)

/*
Because the purpose of map() is to return a new transformed array.

If you're only printing things, and not using the returned array, it's better to use forEach() instead

*/
array.map((item)=>{
    let num = item
    console.log(num)
})





