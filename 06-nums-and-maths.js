const score=new Number(3006000000)
console.log(score);

console.log(score.toString());
console.log(score.toFixed(3));  //how many count after decimal point

console.log(score.toPrecision(3)); //maximum accurate number to find 
console.log(score.toLocaleString('en-IN'))  //to separate the bigint like number after each 3 number


//++++++++++++++++ Maths +++++++++++++

console.log(Math);
console.log(Math.abs(-3))
console.log(Math.round(5.478));
console.log(Math.ceil(4.3)) // ceil means top number will be pick 
console.log(Math.floor(3.9)); // floor means low or existing value witout decimal 
console.log(Math.min(3,5,2,7,6));
console.log(Math.max(3,4,2,89,56));


console.log(Math.random());
console.log(Math.floor(Math.random()*10) +1 );

const min=1
const max=10
console.log(Math.floor(Math.random()*10)+min);  //to find any numer between max and min value