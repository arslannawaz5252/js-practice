const coding=["cpp","java","javascript","DSA"]

//coding.indexOf("java")
//console.log(coding.indexOf("java"));
coding.forEach(function (value){
    //console.log(value);
    
})


// arrow function

coding.forEach( (item)=>{
//console.log(item);

})


function printMe(item){
    console.log(item);
    
}
//console.log(coding.forEach(printMe));


//forEach() → used for side effects (like printing or modifying something).

          // Always returns undefined.

           // map() → used to transform data and create a new array.

          // Returns a new array containing whatever you return from its callback.


       [{},{},{}]   

       const MYcoding=[{
                          codinglanguage:"javascript",
                          codingfile:"js"
       },
       {
             codinglanguage:"data structure",
            codingfile:"DSA" 
       },
       {
                        codinglanguage:"python",
                          codingfile:"pt"

       }]
    //    for (const item of MYcoding) {
    //     console.log(`${item.codingfile} is for ${item.codinglanguage}`);
        
        
      // }
       MYcoding.forEach( function (things){
        console.log(things.codingfile);
        
       })

       