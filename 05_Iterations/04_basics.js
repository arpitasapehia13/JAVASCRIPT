// const coding = ["js" , "ruby" , "java" , "python" , "cpp"]
// const values = coding.forEach( (item) => {
    // console.log(item);
    // return item
// })
// console.log(values);




const myNums = [1,2,3,4,5,6,7,8,9,10]

//USING FILTER METHOD
const newNums = myNums.filter( (num) => num > 4 )
/*const newNums = myNums.filter( (num) => {
    return num > 4 } )    ---------->>>>>          // Using curly braces {} starts a scope, so you need to explicitly return the value
    */
console.log(newNums);

//USING FOR EACH
const newNums1 = []
myNums.forEach( (num) => {
    if(num > 6){
        newNums1.push(num)

    }
})
console.log(newNums1);


const book = [
    {title: 'book 1' , genre: 'Fiction' ,     publish: 1981 , edition: 2004},
    {title: 'book 2' , genre: 'Non Fiction' , publish: 1991 , edition: 2003},
    {title: 'book 3' , genre: 'History' ,     publish: 1982 , edition: 2000},
    {title: 'book 4' , genre: 'Non Fiction' , publish: 1978 , edition: 2009},
    {title: 'book 5' , genre: 'Science' ,     publish: 1980 , edition: 2002},
    {title: 'book 6' , genre: 'Fiction' ,     publish: 1989 , edition: 2005},
    {title: 'book 7' , genre: 'History' ,     publish: 1990 , edition: 2010},
    {title: 'book 8' , genre: 'Non Fiction' , publish: 1980 , edition: 2007},
    {title: 'book 9' , genre: 'History' ,     publish: 1987 , edition: 2002},
    {title: 'book 10', genre: 'Science' ,     publish: 1989 , edition: 2001}
];
const userBooks = book.filter( (bk) =>bk.genre ===  'History' )
const editionDate = book.filter((bk1) => { return bk1.edition >= 2000})
console.log(userBooks);
console.log(editionDate);



const myNumbers = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = myNumbers.map((num) => num + 10 )

//CHAINING
const newNumber = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >= 40)
console.log(newNumber);


//USING REDUCE METHOD
const number = [1,2,3]
const myTotal = number.reduce(function (accVal,currVal) {
    console.log(`acc: ${accVal} and curr ${currVal}`);
    
    return accVal + currVal
 } , 0)
console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course", 
        price: 2999
    },
    {
        itemName: "kotlin course", 
        price: 1999
    },
    {
        itemName: "python course", 
        price: 999
    },
    {
        itemName: "data science course", 
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price , 0 )
console.log(priceToPay);





 

 

