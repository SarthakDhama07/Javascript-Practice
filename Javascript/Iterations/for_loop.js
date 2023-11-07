// for 

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number"); // this is to check wheather 5 will print first or the statement.
    }
    console.log(element); 
}
// console.log(element); can't fetch value due to scope

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop Value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`Inner Loop Value ${j} and inner loop${i}`);
        
    }
    
}
for (let i = 1; i <= 10; i++) {
    console.log(`table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let MyArr = ["IronMan", "Thor", "BlackPanther"]
console.log(MyArr.length);

for (let index = 0; index < MyArr.length; index++) {
    const element = MyArr[index];
    console.log(element);
    
}


