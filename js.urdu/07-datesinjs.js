// dates   

let myDate=new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // here it is object 

//let createDate=new Date(2000,0,23)
//console.log(createDate.toDateString());

// let createDate=new Date(2000,0,23,4,34)
// console.log(createDate.toLocaleString());

let createDate=new Date("01-23-2007")
//console.log(createDate.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp);

// console.log(createDate.getTime());

// console.log(Date.now());

let newDate=new Date()
// console.log(newDate.getDate());
// console.log(newDate.getMonth());

newDate.toLocaleString('default',
    {
        weekday:"long",
day:"2-digit",
year:"numeric"
})