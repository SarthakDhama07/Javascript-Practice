const UserEmail = []

if(UserEmail){
    console.log("Got user Email");
} else{
    console.log("Didn't get User Email");
}

// + FALSY VALUES /////
 // FALSE, 0, -0, BigInt 0n, "", null, undefined, NaN

 // + TRUTHY VALUES ////
// "0", 'false', " ", [], {}, function(){}

// CHECK WHEATHER ARRAY OR OBJECT IS EMPTY ??

// Empty Array 

if (UserEmail.length === 0) {
    console.log("Array Is Empty");
}
 // empty Object

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// NULLISH COALESCING OPERATOR (??): null undefined

let val1;
let val2;
let val3;
let val4;
val1 = 5 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 10 ?? 20

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

/// +++ TERNIARY OPERATOR

// condition ? true : false

    const iceTeaprice = 100
    iceTeaprice <= 80 ? console.log("less than 80") : console.log("more than 80")
