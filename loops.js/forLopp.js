// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (i==5) {
        console.log("5 is the best number");
        
        
    }
    console.log(element);
    
}
//console.log(element);


for (let i = 1; i <=10; i++) {
    
    console.log(i);
    for (let j = 1; j <=10; j++) {
        const element = j;
        
        //console.log(`"inner vlue of j:" ${element}`);
        console.log(i+'*'+j+'='+i*j);
        
    }
    
    
}
//array in loop

const MyArray=["Arslan","Ali","Ahmad","atif Aslam"]
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    console.log(element);
    
    
}

for (let i = 1; i <= 20; i++) {
    if (i==10) 
        {console.log(" error detected");
            break  // this stop the code on condition full requiremnet
    }
    const element = i;
    console.log(element);
    
    
}


for (let i = 1; i <= 20; i++) {
    if (i==10) 
        {console.log(" error detected");  // skip the condition and not print that condtion
            continue
    }
    const element = i;
    console.log(element);
    
    
}