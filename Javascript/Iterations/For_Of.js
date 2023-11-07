// FOR OF LOOP 

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]
for (const i of arr) {

    // console.log(i);
}

const AIM = "SARTHAK DHAMA SDE-1"
for (const i of AIM) {
    // console.log(`EACH CHAR OF OF AIM IS : ${i}`)
}


/// Maps +++ 

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATE OF AMERICA")
map.set('FR', "FRANCE")
map.set('IN', "INDIA")

// console.log(map);

for (const [key, value] of map){
    // console.log(key, ':-', value);
}


///FOR OBJECT 

const myObject = {
    game1 : "GTA", 
    game2: "vice city"

}

for (const [key,value] of myObject) {
    console.log(key, ':-', value)
}

// myObject WILL NOT PRINT BECASE IT IS NON ITERABLE