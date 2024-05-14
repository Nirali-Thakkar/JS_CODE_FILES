//singleton oject 
const usr = new Object();
console.log(usr)
usr.id =1
usr.name = "nirali"
//to merge object 
const obj1 = { 1:'a',2 :'c'}
const obj2 = {3:'d',4:'y'}
const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)
//can also use
const obj4 = {...obj1,...obj2}

//object inside array
const arr = [
    {
        id : 1
    },
    {

    },
]
console.log(arr[1].id)

//to get only keys of object 
console.log(Object.keys(obj3))
//for values
console.log(Object.values(obj3))

console.log(Object.entries(obj3))

//to check prpperty or key
console.log(obj1.hasOwnProperty("1"))