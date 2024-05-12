// javascript allows to change variable type at run time 
// javascript is case sensitive
let a = 10;
console.log(a);
a = "nirali"
console.log(a);
//var, let, const
//var is globally scoped
//let and const are block scoped
//var can be updated and re-declared within its scope
//let can be updated but not re-declared
//const can neither be updated nor be re-declared
//var variables are initialized with undefined whereas let and const variables are not initialized
//const must be initialized during declaration unlike let and var
//var 
var b = 10;
{
  var b = 15;
  console.log(b);
}
console.log(b);
//let 
let c = 10;
{
  let c = 15;
  console.log(c);
}
console.log(c);
//const - initialiion at time of declaration is mandatory
const d = 10;
console.log(d);
