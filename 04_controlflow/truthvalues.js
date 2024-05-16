//falsy values

//false
//0
//-0
//0n - bigint 
//""
//null
//undefined 
//NAN


//Truthy values 

// "0" 
// 'false' - "false"
// []
// " "
// {}
// function(){} -empty function
//false == 0
//false == ""
//0 == ""

//to check object is empty or not 

const obj = {}
if(Object.keys(obj).length ==0){
    console.log("object is empty")
}

//nullish coalescing operator (??) based on null and undefined 
 let val1 = 5 ?? 10 // will assign 5
 console.log(val1)
 let val2 = null ?? 10 //will assign 10
 console.log(val2)
 let val3 = undefined ?? 15 //will assign 15
 console.log(val3)
 let val4 = null ?? 10 ?? 20 //will assign 10
 let val5 = undefined ?? null //will assign the second option here it will null
 console.log(val5)
 let val6 = null ?? undefined //will assign the second option here it will undefined 
 console.log(val6)



 //ternary opeartor 
 //condition ? true : value 
 let p = 100
 p>99 ? console.log(true) : console.log(false)