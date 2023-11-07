
 ///// map method

 const mynum = [1,2,3,4,5,6,7,8,9,10]


//  const newnum = mynum.map( (num) => num +10);

const newnum = mynum.map((num) => num*20)
                    .map((num) => num + 2)
                    .filter((num) => num >= 30)

 console.log(newnum);