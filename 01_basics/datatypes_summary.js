/*
#PRIMITIVE TYPES:-

String , Booleans , Number , Null , Undefined , Symbol , BigInt



#REFERNCE TYPE / NON-PRIMITIVE TYPES:-

Arrays , Objects , Functions , 
*/

const id = Symbol('113')
const anotherId = Symbol('113')
console.log(id === anotherId);


const registration = [12111208,1211089,12111289];

let myObj = {
    name: "Arpita",
    age: 21
}

const myFunction = function(){
        console.log("Hi this is Arpita here!")
}

console.log(typeof myFunction);
console.log(typeof myObj);
console.log(typeof registration);



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//STACK(PRIMITIVE)  ,    HEAP(NON-PRIMITIVE)

let fname = "arpita"
let surname = fname
surname = "sapehia"
console.log(fname);
console.log(surname);


let user1 = {
    email: "user@gmail.com",
    upi : "user@ybl",
}

let user2 = user1

user2.email = "user2@gmail.com"
console.log(user1.email);
console.log(user2.email);
