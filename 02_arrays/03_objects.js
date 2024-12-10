//SINGLETON 

//object literals

const mySym = Symbol("key1");

const user = {
    [mySym]: "myKey1",
    name: "Arpita",
    emailId: "arpita@gmail.com",
    age: 21,
    location: "India",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

console.log(user.name);
console.log(user["name"]);
console.log(user[mySym]);


user.emailId = "arpitaaa@gmail.com";
console.log(user["emailId"]);
// Object.freeze(user)
console.log(user);

user.greetings = function(){
    console.log("Hi there!!")
}
console.log(user.greetings);
console.log(user.greetings());


user.greetings2 = function(){
    console.log(`Hi there, it is ${this.name} here`)
}
console.log(user.greetings2());
