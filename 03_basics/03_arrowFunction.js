const user = {
    name : "Arpita",
    emailId : "arpita@gmail.com",

    welcomeMessage: function(){
        console.log(`${this.name}, welcome here!`);
        console.log(this);
        
        
    }
}
user.welcomeMessage()
user.name = "sam"
user.welcomeMessage()
// console.log(this);



function one(){
    // let name = "arpitazzz"
    console.log(this);
}
one()


//ARROW FUNCTION
const user1 = () => {
    let name = "arpitaa"
    console.log(this);
}
user1()


//EXPILCIT RETURN
const addNumber = (num1,num2) => {
    return num1 + num2;
}
console.log(addNumber(13,12))


//IMPLICIT RETURN
// const diffNumber = (num1,num2) =>  num1 - num2;
const diffNumber = (num1,num2) =>  (num1 - num2);
console.log(diffNumber(23,13));


const multipleNumber = (num1,num2) => ({user1 : "arpi"});   //object return
console.log(multipleNumber(3,4));

