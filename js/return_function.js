/*
function greet() {
    function otherFunction () {
        console.log('I don\'t know you but this drives me crazzy!!!');
    }
    return otherFunction;
}
let myFunction = greet(); // Calling the greet function we get other function back
myFunction(); // Call the returned function and get "I don't know you but this drives me crazzy!!!"
*/

/*
function greet() {
    function sayit() {
        console.log("Hello all");
    }
    return sayit;
}
const hello = greet();
hello();
*/

function calculator(number) { //Module :)
    let add = function (value) {
        return number + value;
    }
    let sub = function (value) {
        return number - value;
    }
    let mul = function (value) {
        return number * value;
    }
    let div = function (value) {
        return number / value;
    }

    return { add, sub, mul, div };
}

const { add, sub } = calculator(10);
const addResult = add(50);
const subResult = sub(2);

console.log("ADD", addResult); // 60
console.log("SUB", subResult); // 8