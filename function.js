// console.log("A");
// console.log("r");
// console.log("s");
// console.log("l");
// console.log("a");
// console.log("n"); 
 //if we want to print that so to avoid from long code we use functions
 
function cons() {
    console.log("A");
console.log("r");
console.log("s");
console.log("l");
console.log("a");
console.log("n"); 
    
}

cons()

function myname(num1,num2) {   // function definition
    console.log(num1+num2);
    
}
myname(3,8)     //function calling

function myname(num1,num2) {   // function definition
    const result=num1+num2
     return result
    
}
const result=myname(3,6)
console.log("result:",result);
 

function username(username) {
    return `${username} just logged in`
    
}
console.log(username("Arslan"));

 function username(username) {
    if (username===undefined) {
        console.log("please entre the username");
        return
        
    }
    return `${username} just logged in`
    
 }
console.log(username(""));
 

//  functions with many argumnets to add up 

function calculateCart(...num6) {
    return num6
    
}
console.log(calculateCart(6,56,5678,900,8970));


// functions with objects

const person={
    name:"Arslan",     // alternate methodn
    price:399
}

function handleObjects(anyperson) {
    console.log(` name is ${anyperson.name} and  price is ${anyperson.price}`);
    
}
handleObjects(person)
handleObjects({
    name:"Arslan",           //another method to call object in function
    price:800
}) 
 

// arrays in functions 

const mynewArray=[234,454,500,123]
function returnsecondValue(getarray) {
    return getarray[2]
    
}
//console.log(returnsecondValue(mynewArray))
//console.log(returnsecondValue([234,454,500,123]))