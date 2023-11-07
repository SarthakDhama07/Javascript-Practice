const user = {
    username: "sarthak Dhama SDE",
    price: 999,

    welcomemeaasge : function(){
        console.log(`${this.username}, Welcome to software World`);
        console.log(this);
    }

}

// user.welcomemeaasge()
// user.username = " SARTHAK"
// user.welcomemeaasge()
// console.log(this);

// this function will give the output likr what basically is in the function and return object as a output.

// function chai(){
    
//         let username = "Sarthak"
//         console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "Sarthak"
//   console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "sarthak"
    console.log(this)
}
// chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}
const addTwo1 = (num1, num2) => num1 + num2
const addTwo2 = (num1, num2) => (num1 + num2)
const addTwo3 = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(3,4))
console.log(addTwo1(3,4))
console.log(addTwo2(3,4))
console.log(addTwo3(3,4))


const array = [1,2,3,4,5]
array.forEach() 

console.log(array);