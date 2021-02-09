/*
if (condition) {
    //True statement
}*/
/*
const playerLife = 50;
const stamina = 10;

if (playerLife >= stamina) {
    console.log('Have a good game!');
}

if (playerLife == stamina) {
    console.log('Game Over!!!!');
}

console.log("This will always happens!");
*/

/*
const number = 6;

if (number === 2) {
  console.log('The number is 2');
} else {
  console.log('The number is not 2');
}
*/
/*

//let ternary = (condition) ? TRUE : FALSE;
let number = 2; //The scope of variable number is global
let message = (number === 2) ? `The number is 2` : `The number is NOT 2`;
console.log(message);
*/

const number = 5;
const week = 10;
if (number === 2) {
    if (week === 10) {
        console.log('The number is 2 and week is 10');
        number++;
    } else {
        console.log('The number is 2 and week is NOT 10');
    }
} else if (number === 3) {
    console.log('The number is 3');
} else if (number === 4) {
    console.log('The number is 4');
} else {
    console.log('The number is unknown');
}
/*

const number = 2;
const week = 12;
const message = (number === 2 && week === 10) ? "This is 2" : (number === 3 && week === 11) ? "This is 3" : (number === 4) ? "This is 4" : "Unknown";
console.log(message);
*/

function this_is_true(){
    console.log("This is true 1");
    console.log("This is true 2");
}
function this_is_false(){
    console.log("This is false 1");
    console.log("This is false 2");
}

let condition = (number === 2) ? this_is_true() : this_is_false();