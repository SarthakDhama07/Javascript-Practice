function calculatecartprice(val1,val2,...num1){
    return num1
}
// console.log(calculatecartprice(200, 400,500,700,900));

const user = {
    username: "sarthak",
    price: 199
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleobject(user);

handleobject({
    username:"sam",
    price: 3900
})
const array = [200,300,400,500]

function returnsecondvalue(getArray){
    return getArray[1]

}

// console.log(returnsecondvalue(array));
console.log(returnsecondvalue([200,300,500,1000]));