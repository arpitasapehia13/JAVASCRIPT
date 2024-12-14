const userMail = "arpita@gmail.com"
// const userMail = ""
// const userMail = " "
// const userMail = []
if(userMail){
    console.log("Got user mail");
}
else{
    console.log("Dont have the mail");
}


/**
 FALSY VALUE -> False , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

 TRUTHY VALUE -> "0" , 'false' , " " , [] , {} , function(){}
 */




// if(userMail.length === 0){
//     console.log("ARRAY is not empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}


//NULLISH COALESCING OPERATOR (??): 'null,undefined' ---> if we got null/undefined value then we get the safety check
let val1;
// val1 = 10 ?? 5
// val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);


//TERNINARY OPERATOR
// condition ? true : false 

const iceTea = 50
iceTea <= 100 ? console.log("true") : console.log("false");

