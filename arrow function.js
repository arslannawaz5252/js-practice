// arrow function 

// this key word

const user={
    username:"Arslan",
    price:999,
    welcomeMessage:function () {
        console.log(`${this.username},Welcome to my website`);
        // this key word refer to current context in the scope
        c//onsole.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username="Arshan"
// user.welcomeMessage()
//console.log(this);


const addone=function(){
    username1="Ali"
    console.log(this.username1);
    
}
addone()

const obj=()=>{
    username2="Asif"
    console.log(username2);

}
//obj()

// arrow function with parenthesis
const adtwo=function (num1,num2) 
{
    return (num1+num2)
    
}
console.log(adtwo(3,4));

// arrow function without parenthesis

const addtwo= (num1,num2) => (num1+num2)
    

console.log(addtwo(9,4));

