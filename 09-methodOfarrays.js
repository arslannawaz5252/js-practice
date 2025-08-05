const marvel_heros=["Arslan","Ali","Spider"]
const dc_heros=["akif","atif","evallah","ghr"]



const allheros1=marvel_heros.concat(dc_heros)
console.log(allheros1);

const allheros=[...marvel_heros,...dc_heros] // this is spread method individual elemt came into singla array

console.log(allheros);

console.log(Array.from("Arslan"));

let score=233
let score1=322
const name="Arslan"
console.log(Array.of(score,score1,name));  // (of) keyword return new array as a result 
console.log(typeof score1, typeof name);

console.log(Array.from({name:"Arsl"}));  // intersting



