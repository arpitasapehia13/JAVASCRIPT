//for of 

// ["" , "" , "" , ""]
// [{}, {}, {}, {}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    console.log(`Each char is: ${greet}`);
}

//MAP  -->> Unique values
const map = new Map()
map.set('IN' , "India");
map.set('USA' , "United States Of America");
map.set('FR' , "France");
console.log(map);

for (const [key , value] of map) {
    console.log(key , ':-' , value);
}





/*We have different ways of iterating through OBJECTS...


const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}
for (const [key , value] of myObject) {
    console.log(key , ':-' , value);
}

*/



// for in
const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


 
const programming = ["js" , "rb" , "py" , "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


//for each

const coding = ["js" , "perl" , "cpp" , "python"]
// coding.forEach(function (val){
//     console.log(val);
    
// } )

// coding.forEach((item) => {
//     console.log(item);
    
// })

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

coding.forEach((item , index , arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
})

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "python",
        languageFile: "py"
    },
    {
        languageName: "C++",
        languageFile: "cpp"
    }
]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
} )