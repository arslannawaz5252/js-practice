// reduce method

const num=[1,2,3,4]
const numbar=num.reduce( (acca,currval)=>{
    return acca+currval
},0)
console.log(numbar);


const numer=[1,2,3,4]
const number=num.reduce(function (acca,currval) {
    return acca+currval},0)
    

console.log(number);
// 

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const user=shoppingCart.reduce( (acca,item)=>acca+item.price,0)
console.log(user);
