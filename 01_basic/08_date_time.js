const mydate = new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleDateString())
console.log(typeof mydate) //object 

const mycreateddate = new Date(23,0,23) //0 is january month start from 0 in js 
console.log(mycreateddate.toDateString()) 

const mycreateddate2 = new Date(23,0,23,6,8) //to set time
console.log(mycreateddate2.toLocaleString()) 

const mycreateddate3 = new Date("2023-1-14") //start from 1
console.log(mycreateddate3.toLocaleString()) 

const mytime = Date.now()
console.log(mytime) //answer in mille second 
console.log(mycreateddate3.getTime())

//t o get in second 
console.log(Math.floor(Date.now()/1000))
//to get month or date 
const newdate = new Date()
console.log(newdate.getDay())
console.log(newdate.getMonth())
//to do format
newdate.toLocaleString('default',{
    weekday : "long",
})