const mynum = [1,2,3,4]

const mytotal = mynum.reduce( function(accumalator, currentvalue) {
    console.log(`acc : ${accumalator} and currval : ${currentvalue}`);
    return accumalator + currentvalue
}, 0)


const myTotaleasy = mynum.reduce( (acc, curr) => acc + curr, 0)


// console.log(mytotal)
// console.log(myTotaleasy)



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(total)