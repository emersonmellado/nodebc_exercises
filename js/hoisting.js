/*
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
*/


//1. This is your source code
console.log(`This is a number ${number}, ${another}`);
let number = 10;
let another = 20;

//2. First JavaScript parse
let number;
let another;
console.log(`This is a number ${number}, ${another}`);
number = 10;
another = 20;

//3. Second JavaScript execution
let number;
let another;
console.log(`This is a number ${number}, ${another}`); //This is a number undefined, undefined
number = 10;
another = 20;