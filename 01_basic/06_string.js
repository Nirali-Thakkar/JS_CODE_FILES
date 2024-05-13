//string interpolation
let name = "Nirali"
let age = 22
console.log(`hello my name is ${name} and my age is ${age}`)
//can also declare string as object 
let lname = new String("Nirali")
//to asscess
console.log(lname[0])
//to know charcter at index 
console.log(lname.charAt(3))
//to know index of chracter
console.log(lname.indexOf('a'))
//substring
let neww = lname.substring(0,3)
console.log(neww)
//slice
let neew = lname.slice(-5,2) //in slice you can give negative values it will strat from end
console.log(neew)
//trim  remove white space 
let fname = "      nirali    "
console.log(fname)
console.log(fname.trim())
//replace
console.log(lname.replace('N','V'))
//includes 
console.log(lname.includes('i'))
//split 
let a = "nirali thakkar ppp"
console.log(a.split(" "))

