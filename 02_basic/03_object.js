//two types of object 
// 1-literal -no singleton
// 2-constructer -singleton 

//single ton 

//object literals 
const jsuser = {
    name : "nirali",
    "full_name" : "Nirali thakkar",
    age : 18,
    location : "ahmedabad",
    days : ["m","t"]
}
//to access
console.log(jsuser.name)
console.log(jsuser["full_name"]) 

//to use symbol in object 
const mysmb = Symbol("Hello")
const jsuser1 = {
    name : "nirali",
    "full_name" : "Nirali thakkar",
    [mysmb] : "hELLO WORLD",
    age : 18,
    location : "ahmedabad",
    days : ["m","t"]
}
console.log(jsuser1[mysmb]) 
//if you dont want to change object 
Object.freeze(jsuser)
console.log(jsuser1)

//to add function 
jsuser1.greeting = function(){
    console.log("Hello jsusers")
}
console.log(jsuser1)
console.log(jsuser1.greeting())
console.log(jsuser1.greeting)

//can also use this to reference object key