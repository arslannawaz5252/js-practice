// singleton objects 

//const user=new Object(); // singleton object 
const tinderuser={}                            // non sigleton 

tinderuser.Emailid="arslan@google.com"
tinderuser.name="Arslan"
tinderuser.isloggedin=false


//  console.log(tinderuser);

const regularuser={
    email:"arslanchatgpt@.com",
    fullname:{
        username:{
            firstname:"Arshan",
            lastname:"Nawaz",
        }

    }
}

// console.log(regularuser.fullname.username);

const obj1={1:"a",2:"b"}
const obj2={3:"s",4:"w"}
const obj5={7:"e",8:"d"}

//const obj3={obj1,obj2,obj5}
//const obj3=Object.assign({},obj1,obj2,obj5)

//console.log(obj3);

// const obj3={...obj1,...obj2}   // spread processs used 
// console.log(obj3);

const arrayobj=[
    obje={
          email:" 123@.com",
          id:12344,
    },
    objc={


    },
    objd={

    }
]
// console.log(arrayobj[1].id);

// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

// console.log(Object.keys(regularuser));
// console.log(Object.values(regularuser));


const course={
    coursename:"javscrpt",
    price:999,
    courseInstuctor:"Arslan",

}
// course.courseInstuctor
// console.log(course.courseInstuctor);

const {courseInstuctor:instructor}=course // object destruction 

//console.log(courseInstuctor);
console.log(instructor);



//   APi values

{
"name":"Arslan",
"age":12,
"location":"jampur"

}


// in array form also api can exist
[
    {

    },
    {

    },
    {
 
    }
]