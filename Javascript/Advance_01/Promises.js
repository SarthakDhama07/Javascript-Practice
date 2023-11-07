/// PROMISES 
// WHY WE USE PROMISES // TO FETCH DATA FROM DATABASE API, CRYPTOGRAPHY, NETWORK && DOING ANY ASYNCHORONUS TASK


// 1 METHOD OF CALLING PROMISE

const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYN TASK HAS BEEEN COMPLETED")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("PROMISED CONSUMED");
})

// 2 way of calling PROMISES

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("ASYN TASK HAS BEEEN COMPLETED SDE")
        resolve()
    },1000)
}).then(function(){
    console.log("promise consumed2")
})

 // method of calling PROMISES
 // in this we'll simply call a object with the help of resolve function

 const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "SARTHAK DHAMA SDE", Email: "sarthakdhama007@mail.com"})
    },2000)
 }).then(function(user){
    console.log(user);
 })

// 4th method OF WRITING PROMISES
// IN THIS METHOD WE'LL THROW AN ERROR AND THAT WILL DELAY THE ASYN FUNCN  AND THEN WE HAVE TO CATCH THE FUNCTION WITH HELP OF PROMISES.

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "SARTHAK DHAMA SDE", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// 5th method of calling promises using async await. 
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "SARTHAK DHAMA", password: "12453"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()

// async function getalluser(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error)
//     }
// }
// getalluser();

/// fetch API 

fetch('https://api.github.com/users/hiteshchoudhary').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
}).catch((error) => console.log(error))
