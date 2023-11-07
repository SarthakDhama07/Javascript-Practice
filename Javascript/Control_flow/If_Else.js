// if 

const isUserLoggedIn = true
const Tempreture = 40

if( Tempreture === 40){
    console.log("Less than 50");
} else{
    console.log("tempreature is greater thean 50");
}

console.log("This will always Execute");

// Logical Operators For Comparison +++++
 
// <, >, <=, >=, ==, !=, ===, !==

const score = 300
if(score> 100){
    let power = "Fly"
    console.log(`User Power: ${power}`);
}
// console.log(`User Power: ${power}`); 
// You can not acces the value of power due to scope.

const Balance = 1000
if (Balance<500){
    console.log("less than 500");
} 
else if (Balance < 750){
    console.log("balance less then 750");
} 
else{
    console.log("balance less then 1200");
}

if (Balance >500) console.log("test"), console.log("test2");
// this is bad practice for doing if statements.

//  && and || statements (and, OR) 

const isUserloggedin = true
const debitcard = true
const loggedinfromgoogle = false
const loggedinfromemail = true

if(isUserloggedin && debitcard && 2===2){
    console.log("Allow user to Enroll");
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("user is logged in ");
}










