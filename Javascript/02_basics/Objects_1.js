// two ways to create a objects - lateral, constructive
// Object.create(literals)

const mySym = Symbol("newkey")

const SDE = {
    name:"sarthak",
    "Full name": "Sarthak Dhama",
    [mySym]:"newkey",
    age: 18,
    location:"jaipur",
    email:"sarthakdhama@primathon.com",
    isloggedIn:false,
    lastloggedin:["monday", "saturday"]
}

// console.log(SDE.email)
// console.log(SDE["email"])
// console.log(SDE["Full name"])
// console.log(SDE[mySym])

SDE.email = "sarthak@amazon.com"
// Object.freeze(SDE) 

// freze will stop the changes in the object.


// SDE.email = "sarthak@isourse.com"
// console.log(SDE);

SDE.greeting = function(){
    console.log("hello SDE");
}
SDE.greeting2 = function(){
    console.log(`hello SDE, ${this["Full name"]}`);
}
console.log(SDE.greeting());
console.log(SDE.greeting2());