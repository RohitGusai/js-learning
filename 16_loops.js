// there many types of for loop each one is for purpose let's see

const object = {
    name : "Ronaldo",
    profession : "Football",
    trophy : 40
}

// remmenber it is not a good practice to used array in forin instead for array you can used forof loop
for (const key in object) {
    console.log(object[key])
}
console.log(Object.entries(object)) /* it return and array of object [
  [ 'name', 'Ronaldo' ],
  [ 'profession', 'Football' ],
  [ 'trophy', 40 ]
]*/

// putting [] brackets to destructing the array elment 
Object.entries(object).forEach(([key,value])=>{ // now we are putting array of object in for loop to iterate over it
    console.log(`${key} : ${value}`)
})

// second loop is forof which is used in array
// remmeber we are using const here so the array element print excalty the same one by one
const myarray = [1,2,3,4,5]
for (const element of myarray) {
    console.log(element)
}
// second way but you cannot return and used break or continue  in forEach loop
myarray.forEach((item)=>{
    console.log(item)
})

// third way is using map it can return the new array but not recommeded for printing an array 
// if you wanted to perform a task you can used it 
myarray.map((item)=>{
    console.log(item) // not recommeded to print an array using map method or function
    return item
})
