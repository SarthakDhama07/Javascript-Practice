// const tinderuser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sarhak"
tinderuser.isLoggedin = true

// console.log(tinderuser)

const regularuser = {
    email: "sarthak@primathon.com",
    fullname: {
        userfullname:{
            firstname:"Sarthak",
            lastname:"Dhama SDE"
        }
    }
}

// console.log(regularuser.fullname.userfullname.lastname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1, obj2}
// bad practice
// const obj3 = Object.assign({}, obj1, obj2, obj4) 

// this empty bracket will create a new object otherwise all will store in the first element.

//  console.log(obj3);
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

const users = [
    {
        id:1,
        email:"sartha@meta.com"
    },
    {
        id:2,
        email:"sarthak@Developer.com"
    },
    {
        id:3,
        email:"sartha@SDE.com"
    }
    
]

// console.log(users[1].email);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggedin'));

