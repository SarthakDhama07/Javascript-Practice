const course = {
    coursename: "JS in Hindi",
    Price: "999",
    courseinstructor:"Sarthak Dhama"
}
// course.courseinstructor   // BAD PRACTICE

const {courseinstructor: instructor} = course
// This coversion is basically known as destructuring 
console.log(instructor);

// {
//     "name":"Sarthak Dhama",
//     "occupation": "SDE",
//     "Experience":"Fresher"
// }
// this is how you got a JSON file in the format of object and strings in it.

[
    {},
    {},
    {}
]

// you can also get the API or JSON file in form of array.