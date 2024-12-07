//Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toUTCString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(typeof myDate);


let myCreatedDate = new Date(2023,0,23,8,9);
console.log(myCreatedDate);
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(myTimeStamp/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1 );
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getFullYear());
console.log(newDate.getTimezoneOffset());
console.log(newDate.getDay());

let day = newDate.toLocaleString('default', {
    weekday: "long"
})

console.log(day);