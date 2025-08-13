// truthy value

//   {},[]," ","0",'false',

// falsy values
// 0,-0,NaN,0n,BigInt,null,undefined

const useremail=null
if (useremail) {
    console.log("available");

}
else{
    console.log("Not availble");
    
}


const useremaile=[1,2,3]
if (useremaile.length===0) {
    console.log("empty");

}
else{
    console.log("Not empty");
    
}

false==0
console.log(false==0); // true
console.log(false==''); //true
console.log(0==''); // true
console.log(true==0); // false
console.log(true==1); // true

// to avoid error and assign value in error we use null coalscing opertor(??): null,undefined

let val1;
//val1=5??10
val1=null??33
console.log(val1);

// Terniry operator

// condition ? True:false
      const bookprice=600
bookprice<500 ?console.log("less than 500") :(console.log("greater than 500"));






