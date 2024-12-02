
//BEST PRACTICE IS TO ENSURE THAT DATA TYPE IS SAME
console.log("2" > 1);
console.log("02" > 1);



// The reson is that equality check(==) and comparison >< >= <= works differently.
//Comparsions convert null to a number , treating it as a 0.
//That's why null >= 0 is true and null > 0 is false.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined > 0);


