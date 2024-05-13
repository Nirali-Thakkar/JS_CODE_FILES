//two types of data type 
//1.primitive 
//2.non primitive 


//primitive 
// nn bb ss u
//number null bigInt boelen string symbol undefined 

//non primitive (reference)
// array object function

//js does not need to define type of variable 
// js is staticaly typed or dynamicly typed ?

//symbol if value is same but return value is diffrent 
let id = Symbol("124")
let aid = Symbol("124")
console.log(id === aid)

//array 
let n = ["a","b","c"]
//object 
const item = {
    "harry": true,
    "shubh": false,
    "lovish": 67,
    "rohan": undefined
}
//function
const myfun = function(){
    console.log("Hello world")
}

//typeof null is object
//all non primitive data type is typeof object
//function has typeof function but it is object function
console.log(typeof myfun)
