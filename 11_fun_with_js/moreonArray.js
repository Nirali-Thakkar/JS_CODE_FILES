const arr = [1,2,3,4,5]
%DebugPrint(arr)

//need to run in v8
// / .jsvu/bin/v8-debug --allow-natives-syntax Test.js


//there are 2 types of array 
    //1- continious (packed)
    //2-holey 

//optimisation of array  both - continioun and holey have this types 
 //SMI (small integer)
//packed elements 
//double(float,fuction,string ..etc)

const arr2 = [1,2,3,4,5] //packed_smi_elemnts
const arr3 = [1,2,,4,5] //have holes
const arr4 = [1,2,3,4,5.0] //packed double elemnts
//fisrt or by default is packed_smi_ements 
//if you made packed_double_elements than again you cannnot make packed_smi_elements
arr2[10]=11 //holey_elemnts

//bound check - that array is accesing elemts in its sizze not out of size

//when you acces the elemnts 
//1-bound check 
//2-hasOwnProperty(arr2,9) 9 is position
//3-hasOwnProperty(arr2.prototype,10)
//4-hasOwnProperty(object.prototype,10)

//holes are very expenive in js


//optimixation leval high-low
//SMI > DOUBLE > PACKED
//IN HOLES
//H_SMI > H_DOUBLE > H_PACKED

//PACKED_SMI_ELEMTS can have only integers without hole
//PACJED can have integers ,double,string , but no hole

const arr5 = new Array(3) //just 3 holes .HOLEY_SMI+ELEMNTS
arr5[0] = '1' //HOLEY_ELEMENTS 
arr5[1] = '2' //HOLEY_ELEMENTS 
arr5[2] = '3' //HOLEY_ELEMENTS 

//one step optimize 
const arr6 = [] 
arr6.push('1') //PACKED_ELEMNTS
arr6.push('2') //PACKED_ELEMNTS
arr6.push('3') //PACKED_ELEMNTS

const arr7 = [1,2,3,4,5]  //PACKED_SMI
arr7.push(NaN) //PACKED_DOUBLE
arr7.push(Infinity) //PACKED_DOUBLE


