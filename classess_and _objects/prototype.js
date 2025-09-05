let myarray=["thor","spiderman"]
myarray.push("aarslan")
//console.log(myarray.push("arslan"));
console.log(myarray);


let heroPower={
    thor:"hammer",
    spiderman:"power",

    getPower:function (){
        console.log(`power of spiderman is ${this.spiderman}`);
        
    }
}
Object.prototype.arslan=function (){
    console.log(`arslan is a good man`);
    
}
Array.prototype.heyarslan=function(){
    console.log(`umt student is here`);
    
}

// myarray.heyarslan();
// heroPower.arslan();

/*Why does this work?

myarray is an array → it first looks inside itself, doesn’t find heyarslan, so it looks up the chain → finds it in Array.prototype.

heroPower is an object → it first looks inside itself, doesn’t find arslan, so it looks up the chain → finds it in Object.prototype */


/*--inheritance--*/

const teacher={
    makevideo:true
}
const teachingSupport={
    isAvailable:false
}
const TAsupport={
    makeAssignment:'js assignment',
    fullTime:true,
    __proto__:teacher
}
//console.log({...TAsupport  });
Object.setPrototypeOf(TAsupport,teacher)


let username="arslan  "

String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
    
    
}
username.truelength();
"arrrrslan".truelength();