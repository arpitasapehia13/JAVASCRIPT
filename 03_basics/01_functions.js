// console.log("A");
// console.log("R");
// console.log("P");
// console.log("I");
// console.log("T");
// console.log("A");

function myName(){
    console.log("A");
    console.log("R");
    console.log("P");
    console.log("I");
    console.log("T");
    console.log("A");

}
// myName  --> this is refernce
// myName()  --> this is execution



// function sumOfTwoNumber(num1 , num2){
//     console.log(num1 + num2)
// }


function sumOfTwoNumber(num1 , num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}
const result = sumOfTwoNumber(3,5)
console.log(result);


function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter your user name");
        return
        
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage());  -----> undefined
console.log(loginUserMessage("arpita"));