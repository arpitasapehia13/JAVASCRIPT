const arr = ["arpita", "nisha" ,"shriya", "sonam"];
const arr1 = ["stuti", "medhavi", "michael"];

// arr.push(arr1);
const allname = arr.concat(arr1);
console.log(arr);
console.log(allname);



//SPREAD OPERATOR
const allNewName = [...arr, ...arr1]
console.log(allNewName);

const anotherArr = [1,2,3,4,5,[6,7,8],[9,4,5],[6,7,[1,14]]];
const anotherArr1 = anotherArr.flat(Infinity);
console.log(anotherArr1);



//METHODS
console.log(Array.isArray("Arpita"))
console.log(Array.from("Arpita"))
console.log(Array.from({name : "arpita"}))  //TO bE remembered

let score1 = 100
let score2 = 200
let score3 = 300

console.log((Array.of(score1,score2,score3)));
