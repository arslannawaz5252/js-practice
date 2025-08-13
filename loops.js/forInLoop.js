
// object in for in loop

const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"rubby",
    swift:"swift by apple"
}
for (const key in myobject) {
    //console.log(`${key} short cut is for ${myobject[key]}`);
   // console.log(key);
    
}

// array in loop

const arr=[23,43,45,21]
for (const value in arr) {
    //console.log(value);
    //console.log(arr[value]);
    
}


// const map=new Map()
// map.set('pak',"pakistan")
// map.set('chin',"china")
// map.set('saud',"saudia Arabia")
// //map.set('pak',"pakistan")             //ignre by map due to duplication
// map.set('usa',"united state of america")
// //console.log(map);

// for (const [value] in map) {
//     console.log(value);
    
//}