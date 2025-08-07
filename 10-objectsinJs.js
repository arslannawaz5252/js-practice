// objects literals



 const mysmb=Symbol("kg")   // symbole define  


const jsUser={
    name:"Arslan",
    [mysmb]:"per kg ",  // symbol as a key in object
    age:19,
    location:"Jampur",
    Email:"arslan@google.com",
    isLoggedIn:false,
    lastAccesed:["Monday","saturday"],

}
console.log(jsUser.Email);
console.log(jsUser["age"]);
console.log(jsUser.name);
console.log(jsUser[mysmb]);

jsUser.Email="alibabasolution@.com"  // how to chamnge some literals values
Object.freeze(jsUser); // freeze means no change in object property after this 
jsUser.name="Arshan"

console.log(jsUser);  




jsUser.greeting=function() {
    console.log("hello js user");

}
jsUser.greetingTwo=function() {
    console.log(`hello js user,${this.name}`);

}
 console.log(jsUser.greeting());   // when we use (.) greeting only then it gives us funcyion refrnec only
console.log(jsUser.greetingTwo());   // when we use greeting(),then it gives function return value

