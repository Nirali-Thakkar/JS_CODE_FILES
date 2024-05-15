//this refers to the current context 
const user = {
    name : "Nirali",
    age : 12,

    welcomemsg : function(){
        console.log(` ${this.name} you are logged in`)
        console.log(this) //will print this object user
    }
}
user.welcomemsg()
console.log(this) //will print empty object ad there is n0 global context 

//arrow function
function chai(){
   let username = "nirali"
    console.log(this.username) //this does not work in function
}
chai()

const chai1 = () => {
    let username = "nirali"
    console.log(this.username) 
}
chai1()

const add = (n1,n2) => {
    return n1+n2
}
console.log(add(2,3))

//implcit return 
//no need to write return statement 
const sub = (n1,n2) => (n1-n2)
console.log(sub(4,2))
//for object 
const name = () => ({name : "nirali"})
console.log(name())