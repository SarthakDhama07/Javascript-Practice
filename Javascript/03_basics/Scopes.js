var c =300
let a = 300

if(true){
    let a = 10  // let and cont can nto be acces outside curly braces due to scope
    const b =20
    var c =300 // var will execute because it doesn't follow scope
    //  console.log("Inner:", a);
}
// console.log(a);/
// console.log(b);
// console.log(c);


function one(){
    const username = "Sarthak Dhama SDE"

    function two(){
        const website = "frontEnd"
        // console.log(username)
          //children function can access parent element
    }
    two()
}

// one()

if(true){
    const username = "Sarthak Dhamam SDE"
    if(username === "Sarthak Dhamam SDE"){
        const website = " Frontend"
        console.log(username + website)

    }
    // console.log(website)
      // can't access due to scope
}
// console.log(username); 
  // can't access due to scope



  ///////////// +++++ HOISTING ++++++=

 
console.log(addone(5))
 // you can direct access this beacuse you didn't store function in any variable

function addone(num){
    return num + 1
}



// addTwo(5) /// you can not access this beacuse it is not executed.
const addTwo = function(num){
    return num + 2
}