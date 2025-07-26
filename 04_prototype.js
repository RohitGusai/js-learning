const name  = new String("jhon doe")

console.log(typeof name) // object

const names = "Marta"
console.log(typeof names) // string 


console.log(name.charAt(0)) // j
console.log(name.toUpperCase()) // JHON;
console.log(name.indexOf("o")) // 1
console.log(name.length) // 4

console.log(name.charCodeAt(2))

const str = "To be, or not to be, that is the question.";

console.log(name.split(" "))

console.log(name.trim());

console.log(name.replace("jhon", "john")) // john doe

console.log(name.startsWith("jhon")) // true
console.log(name.endsWith("doe")) // true
console.log(name.includes("d")) // true
console.log(name.includes("n",0,2))
console.log(name.search("doe")) // 5
const regex = /[a-z]/g;
console.log(name.match(regex))
console.log(name.slice(0,4));

console.log(name.replace("jhon","rohit"))
console.log(name.replaceAll("o","a")) // jhan dae
console.log(name.repeat(2))


const s = "5";

console.log(s.padStart(2, "0"));
// Expected output: "05"

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);


const stringObj = new String("foo");

console.log(stringObj);
// Expected output: String { "foo" }

console.log(stringObj.valueOf());

console.log("rohit".anchor('"hello"')) // <a href="hello">rohit</a> or <a name="&quot;hello&quot;">rohit</a>
