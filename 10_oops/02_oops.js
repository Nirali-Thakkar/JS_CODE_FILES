//object literal 

const user = {
    name : "nirali",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`username : ${this.name}`)
        console.log("Got user details")
        console.log(this) //will print this object
    }
}
console.log(user.name)
console.log(user.getUserDetails())
console.log(this) //will print empty {} there is nothing in global context 
//this in browers will give window object 

//constructer function 
//new is a constructer function 
//with one objeect ypu can form multiple objects
// gives you new instance every time 

function User1(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User1("hitesh", 12, true)
const userTwo = new User1("ChaiAurCode", 11, false)
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor);