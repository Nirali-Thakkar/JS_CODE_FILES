//promises - 
// the promise object represents the eventual completion (or failure) of
//  an asynchronous opeartion(example timeout ,timeinterval ..etc ) and it resulting value

//pormises are completed in future 

//promises have 3 states 
//pending
//fullfilled 
//rejected

//promise is an object

//to create  promise
const promise1 = new Promise(function(resolve,reject){
    //do async task 
    //db call,cryptoghraphy , network call
    setTimeout(function(){
        console.log("async task compelted")
        //to connect async task to consume 
        resolve()
    },1000)
})

//to consume promise 
//then has dirct relation to resolve 

promise1.then(function(){
    console.log("promise consume")
})

//can also be 
new Promise(function(resolve,reject){
    console.log("async task 2 completed")
    resolve()
},4000).then(function(){
    console.log("async 2 resolved")
})

//pass data through resolve 
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({name : "nirali" , age:18 , ID : 57})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})


//chaining 
const promise4 = new Promise(function(resolve,reject){
    let error = false
    if(!error){
        resolve({name : "nirali" , age:18 , ID : 57})
    }
    else{
        reject('ERROR : something went wrong')
    }
})

promise4.then((user) =>{
    console.log(user)
    return user.name
}).then((name) => {
    console.log(name)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("promise is resolved or rejected"))

//consume through async await
const promise5 = new Promise(function(resolve,reject){
    let error = true
    if(!error){
        resolve({name : "javascript" , age:18 , ID : 56})
    }
    else{
        reject('ERROR : JS went wrong')
    }
})

async function consumePromise5(){
    //need to write in try catch otherswise error will not be handled 
   try{
    const response = await promise5
    console.log(response)
   }
   catch(error){
        console.log(error)
   }
}

consumePromise5()