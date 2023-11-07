const coding = ["js", "py", "cpp", "swift", "java"]

// coding.forEach( function (val) {
    // console.log(val)
// })

// coding.forEach( (item) => {
//     console.log(item);
// })

// function sde(item) {
//     console.log(item);
// }
// coding.forEach(sde);

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
})

// YOU CAN ALSO PRINT ITEM  INDEX AND ARRAY WITH HELP OF FOREACH


const myCoding = [
    {languagename: "javascript",
    languagefilename: "js"
},
    {languagename: "Python",
    languagefilename: "py"
},
    {languagename: "c++",
    languagefilename: "cpp"
}

] 

myCoding.forEach( (item) => {
    console.log(item.languagefilename)
})
