// This is a singleton object
const object1 = new Object();

// this is object literals

const object2 = {}

object2.id = 101
object2.name = "Ironman"
object2.power = "Technology"



console.log(object1)
console.log(object2)

const heros = {
    id : 102,
    name : "Captain America",
    fullname : {
        name : "chris Evan",
        role : "Marvel",
        friends: {
            robot : "vision",
            metalArm : "Bucky"
        }
    }
}

const objectHero = {name : "Hero", power: "Ring"}
const objectkrissh = {realName : "Rohit", clothes: "black"}

// another way to merge the two object
const object3 = Object.assign({}, objectHero,objectkrissh)
console.log("merging Object: ",object3)


// accessing the object inside object which we called nested object
console.log(heros.name) 
console.log(heros.fullname.name)
console.log(heros.fullname?.friends.metalArm) // ? is to check wherter it has value or not

// merging two object
console.log({...object2,...heros})

// it will tell you that object has a property or not in bool value
console.log(objectHero.hasOwnProperty("superpower"))


const course ={
    information : "this is playbook",
    price : 200
}

// object destructuring
const {information: info,price: p} = course;

console.log(info+" "+p);
