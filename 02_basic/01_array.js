//array in js are resizeable and can cointain diff type of data 
let a = [22, 33, 44, 55, false, "not present"];
console.log(a);
//can give more than one type in same array
console.log(a[0]);
//change in any will be change in orignal array 

//another way to declare array 
const myarray = new Array(1,2,3,4,5)

//to add elemet in array 
a.push(14)
console.log(a);
//to delete last eelmet 
a.pop()

let n = a.unshift(23); // n will return length of new array
console.log(n, a);

let m = a.shift();
console.log(m, a); 

console.log(a.includes(9))
console.log(a.indexOf(33))

let c = a.join("_");
console.log(c);

//slice - does not change in orignal array 
let my = a.slice(1,3) // index  1 and 2 will be inclded , 3 will not be included 
console.log(my);
console.log(a);

//splic - does change in orignal array 
let my1 = a.splice(1,3) //index 1 ,2,3 is included and also will be deleted from oringnal array 
console.log(my1);
console.log(a);

