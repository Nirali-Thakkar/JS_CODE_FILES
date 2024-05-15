function sum1(a,b){
    return Math.round((a+b)/2);
}
console.log(sum1(3,4))
//sum1 -reference 
//sum1() -execute 
//function -defination sum1(a,b) - a,b are parameters 
//sum1(a,b)- exectution - a,b are arguments

function name(username = "user"){ //if no arguments are given than username will be user or -ddefault value 
    // if(username === undefined){ 
    //     console.log("please enter username");
    //     return
    // }
    return ` ${username} logged in`
}
console.log(name("nirali"))

//shopping cart 
//when you dont konw how many parameters will be there
//use rest operator (...) also called spread 
function cart(...num1){
    return num1
}
console.log(cart(100,2000,2999))

function cart(val1,val2,...num1){
    return num1
}
console.log(cart(100,2000,2999,2030)) // will print 2999,2030 ...100,2000 will gon in val1 and val1



//to pass object in function 

const user = {
    name : "nirali",
    price : 122
}

function handleobject (anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price} `)
}
handleobject(user)

//can also call functio by
handleobject({
    name : "nirali",
    price : 111
})

//pass array in function 
const arr = [10,20,40,30]

function returnarray(getarray){
    return getarray[1]
}
console.log(returnarray(arr)) //will return second value 