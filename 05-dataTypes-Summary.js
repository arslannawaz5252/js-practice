 /*on how value store in memory and assign on that basis there are two types of datatypes*/

 //permitive
 
//  string,number,Boolean,Bigint,Symbol,null,undefined

let Name="Arslan"
let score=23
let Isloggedin=false
let cityname;
let Number=122344223424n
let temparture=null
let FirstId=Symbol('123')
let SecID=Symbol('123')
console.log(FirstId===SecID)






// Reference(Non-permitive)
// arrays,objects,Funtions

let names=["Ashfan","Arslan","Khan"]
let myobj={
    name:"ali",
    age:23

}

let myFunction= function(){
    console.log("Hello Arslan");
}

console.log(typeof cityname)
console.log(typeof Name );
console.log(typeof score);
console.log(typeof Number);
console.log(typeof names);
console.log(typeof myFunction);
console.log(typeof myobj);
console.log(typeof temparture);



