// for of  loops

const arr=[1,2,3,4]
for (const value of arr) {
   // console.log(value);
    
    
}

const greetings="Hello world"
for (const greet of greetings) {
    // if (greet===" ") 
    //     {
    //     //console.log();
    //     //break
    //     continue // space ignore
    // }
    //console.log(`Each char of ${greet}`);
    
}

// Maps

//maps are uniques object unlike objects ,they dont duplicate the value and keep the oredr same

const map=new Map()
map.set('pak',"pakistan")
map.set('chin',"china")
map.set('saud',"saudia Arabia")
//map.set('pak',"pakistan")             //ignre by map due to duplication
map.set('usa',"united state of america")
//console.log(map);


for (const [key,value] of map) {
    console.log(key ,':-',value);
    
}


// That [key, value] syntax is array destructuring — it takes an array and
//  unpacks its elements into separate variables










// 
const myobject={
    'game 1':"wcc2",
    'game 2':"wcc3"
}
for (const [key,value] of myobject) {
    console.log(key ,':-',value);
    
    
}
// so for of loop doesn't defend object itrartion