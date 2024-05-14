const n = 400
console.log(n)

const m = new Number(100)
console.log(m)

//convert number to string 
console.log(m.toString())
console.log(m.toString().length)

//tofixed to specify number after point 

console.log(m.toFixed(2))

//toprecision -prority given before decimal -return string 
const nm = 123.456
console.log(nm.toPrecision(3))

//tp represent number with comma
const ne = 1000000
console.log(ne.toLocaleString('en-IN'))



//++++++++++++++Math++++++++++++++++
console.log(Math)
//convert (-) to (+)
console.log(Math.abs(-5))
//to round off
console.log(Math.round(5.4)) //round off to 5
console.log(Math.round(5.6)) //round off to 6
console.log(Math.floor(5.4)) //5
console.log(Math.ceil(5.4)) //6
console.log(Math.min(2 ,5,6,7,8,1))
console.log(Math.max(2 ,5,6,7,8,1))

//random - gives random value between 0 and 1
console.log(Math.random())
//can aslo be 0 - so not to get 0 add 1
console.log((Math.random()*10) +1)

//to get random value bet min and max number 
const min = 20
const max = 30
console.log(Math.floor(Math.random() * (max-min+1) + min))