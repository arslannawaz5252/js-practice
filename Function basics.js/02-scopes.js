//  let a=50
//  const b=67
//  var c=49


// if (true){
//      let a=56   // block-scoped, shadows outer 'a'
//     const b=65        // block-scoped, shadows outer 'b'
// console.log("inner:",a);  
// console.log("inner:",b);


 
//var c=45  //   'var' is function-scoped (or global here), overwrites outer 'c'
// console.log("inner:",ci);

//}
//  console.log(a);
//  console.log(b);
// console.log(c);


function one() {
    const username="Arslan"
    function two() {
        const website="youtube"
        console.log(username);
    }
    //console.log(website);
    
    //two()      //This works because inner functions can access variables 
    // from their parent function’s scope (this is called a closure)
}
//one()

if (true) 
    {
        const username="Arslan"
        if (username==="Arslan") {
            const website=" youtube"
            //console.log(username+website);
            
        }
    //console.log(website);
    
}
//console.log(username);


//   intresting case 

console.log(addone(5));
function addone(num) {
    return num+1
    
}

adder(7)
const adder=function addTwo(num1) {
    return num1+2
 
}

// as adder can't proceed before declartion or initialization thta concep is called hoisting  
