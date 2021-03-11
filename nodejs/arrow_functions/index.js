const students = ['tom', 'peter', 'maria', 'claire'];

// function printEach(student) {
//     console.log(student);
// }

// students.forEach(printEach);

// const printEachArrow = student =>{
//     console.log(student)
// }

// students.forEach(student =>{
//     console.log(student)
// });

//With one parameter
// students.map(function(student) {
//     console.log(student);
// })
// students.map(student => {
//     console.log(student);
// })


//With more than one parameter
// students.map(function(student, index) {
//     console.log(student, index);
// })
// students.map((student, index) => {
//     console.log(student, index);
// })

// const greetings = function() { return "Hello you'all"; }
// const greetings = () => { return "Hello you'all"; }
// const greetings = () => { "Hello you'all"; }
// const greetings = () => "Hello you'all";

// console.log(greetings());

// const getUser = () => ({ name: "John", age: 43 })

// console.log(getUser());

// const getUserById = (user) => {
//     if (typeof user ==="object"){
//         return {
//             first_name: user.name,
//             age: user.age
//         }
//         console.log("User", user);
//     }else{
//         console.log("Parameter must be an object");
//     }
// }
// console.log(getUserById({ name: "john", age: 23 }));
// console.log(getUserById("john"));

const getUserById = ({ name, age }) => {
    console.log("User.name", name);
    console.log("User.age", age);
    return {
        first_name: 'a',
        age: 123
    }
}
console.log(getUserById({ name: "john", age: 23 }));