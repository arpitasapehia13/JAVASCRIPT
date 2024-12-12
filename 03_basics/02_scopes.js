// var c = 13;  -->> this is why var is not preferred to use
let num1 = 1;     //GLOBAL SCOPE


//BLOCK SCOPE
if(true){
    let num1 = 10;
    const num2 = 20;
    // var num3 = 30;
    console.log("inner" , num1);
    
}


console.log(num1);   
// console.log(num2);
// console.log(num3);


