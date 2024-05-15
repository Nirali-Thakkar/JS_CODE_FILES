
if(true){
    let a = 10
    const b = 30 
    var c = 50
}
//console.log(a) will give error that a not declared 
//console.log(b) will give error that b not decalred
console.log(c) // will not give erroe as var has global scope

function one(){
    const name = "nirali"
    function two(){
        const id = 222
        console.log(name)
    }
    //console.log(id) //this will give error ad id is in function two scope
    two()
}
one()


console.log(addone(5)) //you can call function before defination 
function addone(value){
    return value +1
}

console.log(addtwo(4)) //this will error as you cannot call before defination as you stored funcyion in variable 
const addtwo = function(num){
    return num+2
}