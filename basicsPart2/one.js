// if 

const isloggedin=true

if(true){
    console.log("EXcuted");
    
}
console.log("Arsln logged in");


//<,>,<=,>=


const temprature=40
if (temprature==41) {
    console.log("Thta's true ");
    
}
else{
    console.log("illegal information");
    
}


const score=87
//    if (score>78) console.log("tested");
   
const balance=800
if (balance<600) {
    console.log("less than 600");  
} 
else if(balance<700) {
    console.log("less than 700");
    
} 
    
else(balance>700) 
    {
        console.log("greater than 700");
}

    
const userloggedin=true
const usrdebitCard=true
const loggedEmail=true
const loggedGoogle=false

if (userloggedin && usrdebitCard) {  // all condition should be true
    console.log("allowed for shopping");
    
}

if (loggedEmail|| loggedGoogle) {   // for mulitple condition and only one should true
    console.log("allowed for access");
    
}
