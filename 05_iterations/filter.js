//for each does not return any value 


//filter '
let mynum = [1,2,3,4,5,6,7,8,9,10]
const newnums = mynum.filter( (nums) => nums > 4 )
console.log(newnums)
//when you write in function {} you need to return 
const newnums2 = mynum.filter( (num) => {
    return num>4
})
console.log(newnums2)

//object  
const books =[
    {title : 'one' , genre : 'history', publish: 1990 },
    {title : 'two' , genre : 'fiction', publish: 1997 },
    {title : 'three' , genre : 'nonfiction', publish: 1987 },
    {title : 'four' , genre : 'history', publish: 1992 },
    
]
const userbooks  = books.filter( (bk) => bk.genre ==="history")
console.log(userbooks)
const userbooks2 = books.filter( (bk) => bk.publish > 1990)
console.log(userbooks2)

