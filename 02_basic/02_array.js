const my = ["nirali","vaibhav","arjavi"]
const my1 = ["a","b","c"]
// my.push(my1)
// console.log(my) //length of my will be four my1 will be added as 1 onelemet 
// //to access b
// console.log(my[3][1])
//merje both array  
const newmy = my.concat(my1)
console.log(newmy)

//spreed works same as concat 
const all = [...my,...my1] //can add more than 2 values
console.log(all)

//flat the array to merge all nested array 
const a1 = [1,2,3,[5,6,7],7,8,[6,[7,8]]]
const a2 = a1.flat(Infinity)
console.log(a2)

//to from array  - can also use of
console.log(Array.from('nirali'))
