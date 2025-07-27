// Object Literals
// this is a sysmbol, it is a unique identifier that can be used as a key in an object.
const sym = Symbol("RKO");

// An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any type.
// Objects are used to store data in a structured way, allowing for easy access and manipulation of that data
const userObject = {
    name : "Randy",
    age : 40,
    "full name" : "Randy Ortan",
    [sym] : "Snake",
    wrestler : true,
    address : {
        city : "New York",
        country : "USA"
    },
    hobbies : ["Wrestling", "Acting", "Philanthropy"],
    email : "randyortan@wwe.com",
    greeting: function(){
        console.log("Are you a Wrestler?", this.wrestler);
    }
}

// there are two ways to access object properties: dot notation and bracket notation.
// Accessing object properties using dot notation
console.log(userObject.name);

// Accessing object properties using bracket notation
// this is useful when the property name contains spaces or special characters, or when the property name is stored in a variable 
//By default the property name is a string, and it will be in "". it is not compulsory to use "" to declare a key name
console.log(userObject["full name"]);

// Acessing object properties like sysmbol using bracket notation
//Object.freeze(userObject); // this will make the object immutable, meaning you cannot change its properties or values
console.log(typeof userObject[sym]);
console.log(userObject)


// Accessing nested object properties  like address this object is inside userObject
// you can declare the function inside the object and call it using the object name 
// and using {this} keyword to access the properties of the object it works as a reference to the current object.
userObject.greet = function(){
    console.log("Hello, " + this["full name"]);
    console.log(`I am ${this.age} years old and I live in ${this.address.city}, ${this.address.country}.`);
    console.log(`My hobbies include: ${this.hobbies.join(", ")}.`);
}

// calling function inside the object using the object name
userObject.greet();

userObject.greeting();

