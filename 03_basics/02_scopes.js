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


function one(){
    const userName = "Arpita"

    function two(){
        const course = "JS"
        console.log(userName);
        
    }
    // console.log(course);
    two();
}
one();


if(true){
    const user = "arpi"
    if(user === "arpi"){
        const website = " insta"
        console.log(user + website);
        
    }
    // console.log(website);
}
// console.log(user);


//****************************************************************************INTERESTING****************************************************************************************************** */
console.log(addone(1));
function addone(num){
    return num + 1;
}
// addone(1);


addTwo(13);
const addTwo = function(num){
    return num + 2;
}
// addTwo(13);  --->>> this would now give error (TBR)
