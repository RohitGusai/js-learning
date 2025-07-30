// this keyword
// this is keyword which is used to refer the current context variable which comes under scope
const object = {
    name : "Superman",
    power : "flying",
    superpower : function()
    {
        console.log(this) // it will print all the context of the object scope or refer it by using this keyword you can refer any variable in that context
        return `the is ${this.name}.`
    }
}

console.log(object.superpower())



const arrow = () =>{
    console.log(this)
}

arrow()


