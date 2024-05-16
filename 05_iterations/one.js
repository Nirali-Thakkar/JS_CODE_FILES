//for loops
let myarray = [10,20,30]
for(let i=0;i<myarray.length;i++){
    console.log(myarray[i])
}
let obj={
    harry:90,
    shubh:45,
    shivika:56,
    ritika:57,
    shiv:23
  }
  for(let a in obj){
    console.log(a , obj[a]) //a will print key and obj[a] will print value 
  }

  //while loop
  let n = 12
let i=0;
while(i<n){
  console.log(i)
  i++;
}


//do while loop - runs atleast once 
let j=0;
do{
  console.log(j)
  j++;
}while(j<n);