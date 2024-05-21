// question 
//does math.pi value which is constant 3.14 can be made 4 or 3


// In JavaScript, the value of 𝜋
// π is provided by the built-in constant Math.PI,
//  which is approximately 3.14159. You cannot change the value of Math.PI directly because it's a predefined constant.


console.log(Math.PI)

//gives hidden information 
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor)

const chai = {
    name : "giner chai",
    price : 350,
    isAvailable : true,
    order : function(){
        console.log("code fut gaya ")
    }


}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

// Object.defineProperty(chai, "name",{
//     writable : false,
//     enumerable :false
// })
// // now the value will not be able to chnage 

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

//to iterate
for(let [key,value] of Object.entries(chai)){
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`)
    }
} 
//if enumarable on name will be false name will not print 

