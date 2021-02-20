/*
const students = ['John', 'Peter',  'Mary', 'Betty', 'Emily', 'Bruce']; // 6 elements
//index           0       1         2       3        4        5    
//The length of this array is 6        
const studentCount = students.length;
const studentsThirdIndex = 2;
const studentsLastIndex = studentCount - 1;

const thirdStudent = students[studentsThirdIndex];

const number = 100; //does not have length

console.log(thirdStudent[0], thirdStudent.length, number.length); // Mary
console.log(students[studentsLastIndex]); // Bruce

*/










/*
const animals = ['dog', 'cat', 2, 6,21, 28, 'mouse'];
console.log("Animals: ", animals);
animals.push('elephant', 'bird');
//Convention over configuration
animals.sort(); //alphanumeric
console.log("Animals: ", animals);
*/

/*
const numbers = [10, 3, 20, 2, 12, 1];
function compare(a, b) {
    console.log(`Comparing A: ${a} to B: ${b} result is: ${a - b}`);
    return b - a;
}
console.log(numbers.sort(compare));
*/

/*
const numbers = [1, 2, 3];
function compare(x, y) {
    console.log(`Comparing A: ${x} to B: ${y} result is: ${y - x}`);
    return y - x;
}
console.log(numbers.sort(compare));
*/

/*
const numbers = [1, 2, 3];
const compare = (a, b) => a - b;
console.log(numbers.sort(compare));
*/


/*
const numbers = [1, 2, 3];
numbers.push(4);
console.log("1. Numbers: ", numbers);
numbers.pop();
numbers.shift();
console.log("2. Numbers: ", numbers);
*/
/*
const people = ['Amelia', 'Ciro', 'Ulises', 'Carlos'];

people.forEach(function(element, index, originalArray) {
   console.log(arguments);
  //console.log('index', index); 
  //console.log("ALL", arr, " one", p);
});
*/

/*
const numbers = [10, 20, 30];
//               0, 1, 2   
numbers.push((a, b) => a - b); //at index 3
// const func = numbers[3];
for (let i = 0; i< numbers.length; i++){
    console.log("number is", numbers[i]);
    if (typeof numbers[i] === "function"){
        console.log(numbers[i](numbers[i-1], numbers[i-2]));
    }
}
//console.log("1. Numbers: ", numbers[3](10, 2));
*/


const students = ['Amelia', 'Ciro', 'Ulises', 'Jason', 'Carlos'];
const students_short_name = [];
const students_long_name = [];
students.forEach((student) => {
    if (student.toLowerCase().indexOf('a') > 0) {
        students_short_name.push(student);
    } else {
        students_long_name.push(student);
    }
});
console.log("students_short_name", students_short_name)
console.log("students_long_name", students_long_name)