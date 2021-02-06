/*
let age = 20;
let password = 'js1234';
let ageCheck = age >= 18; //true
let passwordCheck = password === 'js1234'; //true

let result = ageCheck && passwordCheck;  //true
//let result = (age >= 18 && password ==='js1234');

console.log('Result: ', result); 
// We get true as both expressions 
*/

/*
let age = 20;
let password = 'js1234';
let ageCheck = age <= 18; //false
let passwordCheck = password === 'js1234'; //true
let result = ageCheck || !passwordCheck;  //
console.log('Result: ', result); 
*/

let age = 30;
let city = "Vancouver";
let money = '1bi';
const result = age >= 30 && city === 'Vancouver' || money === '3bi';
//              true       AND true                OR false
console.log("Result is", result);