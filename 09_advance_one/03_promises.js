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

//to get data 
async function getalluser(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data)
    }
    catch(error){
        console.log("e", error)
    }
}
getalluser()

//without try catch 
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))

//read api article from logrocket website 

//read fetch from mdn

// The global fetch() method starts the process of fetching a resource from the network, 
// returning a promise that is fulfilled once the response is available.

// A fetch() promise only rejects when the request fails, for example, because of a badly-formed 
// request URL or a network error. A fetch() promise does not reject if the server responds with HTTP status
//  codes that indicate errors (404, 504, etc.). 
// Instead, a then() handler must check the Response.ok and/or Response.status properties.

//fetch has special queue for call stack 
//it is called - mico task queue/fetch queue/priority queue

//when fetch is run 
//it has 2 parts
    //1-data reserve -
        //1-onFullfield - response 
        //2-onRejection -reject 
        //we cannot access both have private access
    //2- web  browser /native node  
            //netwok request 
            //if request is sent than send to onFullfield any erroe after sending request like 404 not found will also go to onFullfield 
            //if request cannot be sent than it will go to onRejection
            //after request is sent it is data repsibltiy to form function and set reaspone to global memory 
            
