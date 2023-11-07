////FOR IN LOOP

const myObject = {
    js: "javascript",
    py: "python",
    java: "java",
    swift: "swift"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const Programming = ["js", "rb", "py", "java", "swift", "cpp"]

for (const key in Programming) {
    // console.log(Programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log (key);
}

/// MAP WILL NOT RUN IN FOR IN LOOP BECAUSE IT IS NON ITERABLE

