/*
let firstNumber = 20;
let secondNumber = 20;
let thirdNumber = 10;
//console.log(firstNumber == secondNumber); // true
//console.log(firstNumber == thirdNumber); // false
console.log(10 == '10'); //true - 
//double equals only compares VALUES
console.log(10 === '10', typeof 10, typeof '10');
console.log(`The type of 10 is ${typeof 10}`); //number
console.log(`The type of '10' is ${typeof '10'}`); //string
//double equals compares VALUES and TYPES
*/


/*
let wage = 500;
let stocks = 500;
console.log(wage == stocks); //true
stocks = 500.0; //number (float) 500
console.log(wage == stocks); //true
stocks = '500'; //string 500
console.log(wage == stocks); //true


let wage = 500;
let stocks = 500;
console.log(wage === stocks, typeof stocks); //true
stocks = 500.0; //number (float) 500
console.log(wage === stocks, typeof stocks); //true
stocks = 500.00000001; //number (float) 500
console.log(wage == stocks, typeof stocks); //false
console.log(wage === stocks); //false

stocks = '500'; //string (float) 500
console.log(wage == stocks, typeof wage, typeof stocks); //true
console.log(wage === stocks, typeof wage, typeof stocks); //false
*/

/*
let firstNumber = 20;
let secondNumber = 20;
let thirdNumber = 10;

console.log(firstNumber != secondNumber); // false
console.log(firstNumber != thirdNumber); // true
console.log(firstNumber !== thirdNumber); //true
console.log(firstNumber !== secondNumber); //false
*/


let firstNumber = 20;
let secondNumber = 10;

console.log(firstNumber > secondNumber); // true
console.log(secondNumber > firstNumber); // false

console.log(firstNumber >= 20); //true
console.log(firstNumber <= 20); //true