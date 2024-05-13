console.log("2" > 1) //true as it 2 is converted to number
console.log("02" > 3)  // false

console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true as 0 ==0 
//the reason is copmapraion >= <= > < work defferently than equality check ==
//comparison convert null to  number to 0
//=== also chcek data type with value 
