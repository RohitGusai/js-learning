// today i am going to learn about stack and heap memory in javascript

// this is the example of stack memory
let name = "Magnus"

let anothername = name // the name is copied to anothername varaiable 

anothername  = "cherry" // now anothername is changed but name is not changed

console.log(name); // it will still return "Magnus"

console.log(anothername); // it will return "cherry"


// this is the example of heap memory

let user = {
    name : "Johnny",
    age : 24,
    isStudent : true
}                           // this is an object stored in heap memory 

let anotheruser = user // here anotheruser is a reference to the same object in heap memory 
                        // the varaible is store in stack memory but it take reference from heap memory

console.log(user);
anotheruser.name = "Jason" // now if we change the name in anotheruser it will also change in user 
                            // because both are pointing to the same object in heap memory


console.log(user.name); // it will return "Jason"

console.log(anotheruser.isStudent = false)
console.log(anotheruser.age = 30)

console.log(anotheruser);

