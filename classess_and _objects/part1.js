const person={
    username:"arslan",
    loggedIn:"false",
    pasword:1233,
    getdetail:function () {
        //console.log("this is my word");
        console.log(this);
        
    }
}
//console.log(person.username);
//console.log(person.getdetail());

// 
function user(name,loggedIn,car){
    this.name=name,
    this.loggedIn=loggedIn,
    this.car=car
    return this
}
const user1=new user("arslan","true" ,"good");
const user2=new user("ali",false,"blue")
console.log(user1);
console.log(user2);

