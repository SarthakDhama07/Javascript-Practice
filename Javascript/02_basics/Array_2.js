const marvel_heroes = ["Ironman", "Thor", "Hulk"]
const dc_heroes = ["Superman", "flash", "Batman"]

// marvel_heroes.push(dc_heroes);
 // will push the whole element(array form) into array.
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]); 
// will give flash 

// const new_heroes = marvel_heroes.concat(dc_heroes);
// console.log(new_heroes);

/// best way of concating in array is spread method which is done by ....arrayname

const all_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_heroes);

////// FLAT METHOD
const another_array = [1,2,3,[4,4,5],[6,7,8],[9,3]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


/////+++++++++


console.log(Array.isArray("SARTHAKDHAMASDE"))
console.log(Array.from("SARTHAKDHAMASDE"))
console.log(Array.of({name:"sarthakdhamasde"}))  ////////// Intresting because it give an empty array as output.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));