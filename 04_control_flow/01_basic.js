//if
//< , > , <= , >= , == , != , ===

const userLoggedIn = true
if(userLoggedIn){
    console.log("true");
}

const temp = 5
if(temp < 10){
    console.log("Yes temp is less than 10.");
}


//SCOPE 
const score = 200
if(score > 100){
    const mood = "Happy"
    console.log(`User mood: ${mood}`);
}
// console.log(`User mood: ${mood}`);


const balance = 100
if(balance > 500){
    console.log("Test");
}
else{
    console.log("Test 2");
}

//NESTING
const marks = 90
if(marks < 60){
    console.log("less than 60");
}
else if(marks < 80){
    console.log("less than 80");
}
else{
    console.log("less than 100");
}

const userLoggedIn1 = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn1 && debitCard){
    console.log("Allow to shop");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User Logged In");
}


