// arrays

const numbers=[1,2,3,6,4]
//console.log(numbers);

//console.log(numbers[3]);

//                        methods                  //

//      // shift remove the first elemnt of arrays
//numbers.push(7)          // to add any elment or number in the arrays so we use add method
//  numbers.pop()            // pop only remove the last element of arrays
//  numbers.unshift(4)    // unshift change the index of element by adding new elemnt in 0 index
//  numbers.shift()  
 //console.log(numbers.includes(4)); // give boolean answer in true or false form 
 //console.log(numbers.indexOf(9));//if elemnt is not present to find its index,it return(-1)value
  
//const new_array=numbers.join()
  //A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma.
 // Adds all the elements of an array into a string, separated by the specified separator string
//console.log(new_array);
//console.log(typeof new_array);
console.log("A",numbers);

const myn1=numbers.slice(1,3) //it does't chnage array and remove n-1 of the given range from thos arrays
console.log(myn1);

console.log("B",numbers); 


 
const myn2=numbers.splice(1,3) // modifies the orignal array by removing given range elemnt
 console.log("C",numbers);
 
 console.log(myn2);