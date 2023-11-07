function saymyname(){
    console.log("S");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("h");
    console.log("a");
    console.log("k");
}
// saymyname();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumbers(4,5);~

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3,5)
// console.log("Result: ", result);


function loginusermessage(username = "sam"){
    if(!username){
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in`
}

console.log(loginusermessage("Sarthak"));