//ARRAYS

//SHALLOW COPY 


const myArr = [0, 1, 2, 3, 4,5];
console.log(myArr[1]);

const myArr1 = new Array("arpita", "stuti","vishi");
console.log(myArr1[0]);

//METHODS IN ARRAY

myArr.push(6);
myArr.push(13)
myArr.pop()

// myArr.unshift(10);
myArr.shift()
console.log(myArr);
console.log(myArr.includes(13));
console.log(myArr.indexOf(13));


const newArr = myArr.join()
console.log(myArr);
console.log(newArr);
console.log( typeof newArr);  //This will chage the datatype


//SLICE AND SPLICE  -> In splice original array is manipulated

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);