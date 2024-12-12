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


//REST OPERATOR
function calculateCartPrice(val1,val2,...nums1){
    return nums1;
}
console.log(calculateCartPrice(200,400,6000));



const user = {
    userName: "arpita",
    price : "200"
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);   
}
// handleObject(user);
handleObject({
    userName: "sam",
    price: "199"
});


const myNewArr = [200,400,100,600];
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
// console.log(returnSecondValue([1000,2000,3000,4000]));
