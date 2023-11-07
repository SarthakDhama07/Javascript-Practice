// primitive

// 7 types: string, number, boolean, null, undefined, symbol, bigInt

const score = 100
const score2 = 100.2

console.log(typeof score)
console.log(typeof score2
    )
/////////////////////////

const isloggedIn = true
const outsidetemp = null

console.log(typeof isloggedIn)
console.log(typeof outsidetemp)

//////////////////////

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// /////////////////////////////

//  Refrence (Non-primitive)

// array , object, function

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros)

///////////////////


let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj)

///////////////////////////////////

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction)

// console.log(typeof anotherId);

