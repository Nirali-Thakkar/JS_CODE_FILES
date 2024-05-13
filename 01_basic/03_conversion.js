let n = "33"
console.log(typeof n)
let val = Number(n)
console.log(typeof val)


let nn = "33abc" 
console.log(typeof nn)
let vall = Number(nn) //it will chnange to number nut is not number so sholud not be chnaged 
console.log(typeof vall)
console.log(vall) // it will giev NaN

//null after conversion  to number will give value 0
//undefined after conversion to number will give NaN
//true - after conversion to number will give 1
//false - after conversion to number will give 0

let b = ""
let bol = Boolean(b)
console.log(bol) // will give false
