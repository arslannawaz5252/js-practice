const name="Arslan"
const repoCount=50


console.log(name+ repoCount);
console.log(`Hello my name is ${name} and my repocount is ${repoCount}`); //bactics(``)

/* there is  no difference between bactis and adddition sign method to add string or other typeof dattype
// but it is modern way to concatinate the string or others and it is more readable*/

const gameName=new String('  hit_hik _   ars_ lan   ')
// console.log(gameName[0]);
// console.log(gameName.__proto__);   //  that is object not an empty object{}
console.log(gameName.length);  //total lenghth
console.log(gameName.toUpperCase());  // for conversion of upperase 
console.log(gameName.charAt('3'));  // character at what position
console.log(gameName.indexOf('e'));  // index of character


const newString=gameName.substring(0,3);   //subString method in this last chracter always missed
console.log(newString);

const anotherString=gameName.slice(-5,2);
console.log(anotherString);


// console.log(gameName.trim());

const url='https://www.google.com';
console.log(url.replaceAll("https://www.google.com","https://www.ecomerce.com"));

// console.log(url.includes("sundr"));

console.log(gameName.split("_"));  // split string on the basisi of dash into array[]


const repeatstring="doubleString".repeat(0);
console.log(repeatstring);

