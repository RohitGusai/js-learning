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

const newarray = [1 , 2 , 3 , 4 , 5, 6, 7 , 8, 9]
const answer = newarray.map((item)=> item + 10).map((num)=> num+1);

console.log(answer)

// how it is work map chaining

const newarray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const answer1 = newarray
  .map((item) => {
    const added = item + 10;
    console.log(`Step 1 - Original: ${item}, After +10: ${added}`);
    return added;
  })
  .map((num) => {
    const final = num + 1;
    console.log(`Step 2 - After +1: ${final}`);
    return final;
  });

console.log("Final Answer:", answer);

// filter 

const my = [1,2,3,4,5]

const result = my.filter((item)=>{
    return item < 4

})

// console.log(result)

const marvelHeroes = [
  {
    name: "Iron Man",
    power: "Tech",
    defense: 85,
    movie: "Iron Man",
    releaseYear: 2008
  },
  {
    name: "War Machine",
    power: "Tech",
    defense: 85,
    movie: "Iron Man 2",
    releaseYear: 2010
  },
  {
    name: "Captain America",
    power: "Super Soldier",
    defense: 90,
    movie: "Captain America: The First Avenger",
    releaseYear: 2011
  },
  {
    name: "Bucky Barnes",
    power: "Super Soldier",
    defense: 90,
    movie: "Captain America: The Winter Soldier",
    releaseYear: 2014
  },
  {
    name: "Thor",
    power: "God",
    defense: 95,
    movie: "Thor",
    releaseYear: 2011
  },
  {
    name: "Loki",
    power: "God",
    defense: 88,
    movie: "Thor: The Dark World",
    releaseYear: 2013
  },
  {
    name: "Hulk",
    power: "Gamma",
    defense: 92,
    movie: "The Incredible Hulk",
    releaseYear: 2008
  },
  {
    name: "She-Hulk",
    power: "Gamma",
    defense: 90,
    movie: "She-Hulk",
    releaseYear: 2022
  },
  {
    name: "Black Widow",
    power: "Human",
    defense: 80,
    movie: "Black Widow",
    releaseYear: 2021
  },
  {
    name: "Hawkeye",
    power: "Human",
    defense: 80,
    movie: "Avengers",
    releaseYear: 2012
  }
];


const techpower = marvelHeroes.filter((item)=>{
    return item.power === 'Tech'
})

// console.log(techpower)

const defence  = marvelHeroes.filter((item) => {
    return item.defense > 90
})

// console.log(defence)

const released = marvelHeroes.filter((item)=>{
    return item.releaseYear < 2010
})
// console.log(released)


const find = marvelHeroes.filter((item)=>{
    return item.name.includes("Captain")
})

// console.log(find);


const defences = marvelHeroes.filter((hero, index, arr) => {
  return arr.some((otherHero) => {
    return otherHero.defense === hero.defense && otherHero.name !== hero.name;
  });
});

// console.log(defences)



// reduce method

const num = [1,2,3,4,5]
 

const res = num.reduce((acc,cur)=>{
    return acc + cur;
},0)

console.log(res)



