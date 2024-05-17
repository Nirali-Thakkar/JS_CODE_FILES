const mynums = [1,2,3,4,5]

const ans = mynums.reduce(function (acc,currval)  {
    return acc+currval
},0) //inatiale value will be 0 start with 0 in acc 
//it will add aand pass value to acc in each ieration 
//give addition of numbers 
console.log(ans)

// to see each acc and currvalue add console log 
const ans1 = mynums.reduce(function (acc,currval)  {
    console.log(`acc ${acc} currvalue ${currval}`)
    return acc+currval
},0)
console.log(ans1)

//arrow function 
const ans3 = mynums.reduce((acc,currval) => acc+currval ,0)
console.log(ans3)

const cart = [
    {
        name  : "book",
        price : 300
    },
    {
        name : "book2",
        price : 399
    },
    {
        name : "book3",
        price : 299
    }
]
const res = cart.reduce((acc,item) => acc+item.price ,0)
console.log(res)