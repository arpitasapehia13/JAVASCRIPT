//for

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 5){
        console.log("5 is the best");
    }
    console.log(element);
}



//VISUALIZE IT CAREFULLY!!!
for(let i = 0; i <= 10; i++){
    console.log(`outer Loop value is: ${i}`);
    
    for (let j = 0; j < 10 ; j++) {
        // console.log(`Inner Loop value ${j} and inner loop value is ${i}`);
        console.log(i + `*` + j + `=` + i*j);
        
     }
}
 

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);    
}

//BREAK AND CONTINUE
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
     }
    console.log(`Value of i is ${index}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log(`Detected 5`);
        continue
     }
    console.log(`Value of i is ${i}`);
}
