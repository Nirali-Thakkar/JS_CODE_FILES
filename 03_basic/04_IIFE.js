//IIFE Immediately Invocked Function Expression 
//use to avoid problem causing by global scope

//Named IIFE
(function msg(){
    console.log("DB connected")
}) (); //must add semicolon for end

//arrow function 
//unamed IIFE
( (name) => {
    console.log(`hello ${name}`)
} ) ("nirali")
