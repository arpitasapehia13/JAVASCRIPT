// const user = new Object();   ->> this is singleton object

const user = {}    
user.id = "123412";
user.name = "Mini";
user.isLoggedIn = false;
console.log(user);

//METHODS
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
console.log(user.hasOwnProperty('isLoggedIn2'));



const regularUser = {
    email: "mini@gmail.com",
    fullname:{
        userFullname: {
            firstName: "Arpita",
            lastName: "Sapehia"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullname);
console.log(regularUser.fullname.userFullname.firstName);

const obj1 = {1: "a", 2: "b" , 3: "c"};
const obj2 = {4: "a", 5: "b" , 6: "c"};
const obj4 = {7: "a", 8: "b" , 9: "c"};
// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4};    //SPREAD OPERATOR
console.log(obj3);



const users = [
    {
        id : 1,
        email : "a@gmail.com"
    },
    {
        id : 2,
        email: "r@gmail.com"
    }
]
console.log(users[1].email)


//DE-STRUCTURE 

const course = {
    courseName : "JS",
    price : "799",
    courseInstructor : "Arpita"
}

const {courseInstructor : name1} = course;
// console.log(courseInstructor);
console.log(name1);

// const navbar = ({company}) => {
// }
// navbar(company = "arpita")    -----> THIS IS PART OF REACT , {} IS IDENTIFICATION

// {
//     "name": "vishii", 
//     "courseName": "kotlin",
//     "price": "free"
// }
