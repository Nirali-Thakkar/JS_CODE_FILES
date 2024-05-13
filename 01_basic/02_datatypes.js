// use tc39.es for js documentation for ECMA standards 
//javascript has 7 primitive data types
//fundamental data type
// nn bb ss u
// null number boolean bigint string symbol undefined
// non primitive data type is object
// object is a key value pair
let a = null
let b = 345
let c = true
let d = BigInt("567") + BigInt("3")
let e = "harry"
let f = Symbol("i am a nice symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof g)
//type of null = object  and null is stand alone value 
//object 
const item = {
    "harry": true,
    "shubh": false,
    "lovish": 67,
    "rohan": undefined
  }
  console.log(item["harry"])
