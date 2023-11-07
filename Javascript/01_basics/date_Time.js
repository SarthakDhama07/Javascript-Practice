////// DATES ///////////////

let MyDate = new Date()

// console.log(MyDate.toString());
// console.log(MyDate.toDateString());
// console.log(MyDate.toLocaleString());
// console.log(typeof MyDate);


let myCreatedDate = new Date(2023, 0, 23);
let myCreatedDate2 = new Date(2023, 0, 23, 5, 2);
let myCreatedDate3 = new Date("2023-01-23");
let myCreatedDate4 = new Date("01-23-2023");

// console.log(myCreatedDate4.toLocaleString());
// console.log(myCreatedDate3);
// console.log(myCreatedDate2);
// console.log(myCreatedDate);


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

///// ${newDate.getDay()} and the time.

newDate.toLocaleString('default', {
    weekday:"long"
})
