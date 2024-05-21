//prototype - All JavaScript objects inherit properties and methods from a prototype.
//Every object in JavaScript has a built-in property, which is called its prototype. 
// The prototype is itself an object, so the prototype will have its own prototype,
//  making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
//to add method nirali in all object 
Object.prototype.nirali = function(){
    console.log(`nirali is present in all object `)
} 
heroPower.nirali()
//this method will available to all like array string because you added this properties in top leval hirechry (object )
myHeros.nirali()

//add method to only array 
Array.prototype.heynirali = function(){
    console.log(`nirali says hye to array`)
}
myHeros.heynirali()
//heroPower.heynirali() // heropower is an object so the acces of this method will not be available to object

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport //inheritance
}

Teacher.__proto__ = User//inheritance

//modern aproach 
Object.setPrototypeOf(TeachingSupport,Teacher)

//add  property or methed to all string so that it gievs true length excluding spaces 

let s = "nirali thakkar     "
String.prototype.trueLength = function(){
    console.log(this) //will give the reference string ie nirali thakkar 
    console.log(`true length of the string is ${this.trim().length}`)
}
s.trueLength()
"nirali".trueLength()
"vaibhav".trueLength()


