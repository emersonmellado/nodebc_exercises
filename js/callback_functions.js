/*
function callback_me(name){
    console.log(`Hi, ${name}. I'm calling you back from callback_me`); //This is the second log
}
function displayName(name, cb_fn){
    console.log("Hello my name is", name); //This is the first log to display
    console.log("Intense computation, such as", 1+1, name.length);
    cb_fn(name);
}
displayName('John Rambo', callback_me);
*/







/*
const done = function () { //Scope: This is a global function
    console.log('done');
}

const another = function (){
    console.log("Another kind of done");
}

function doSomething(my_callback) { 
    function donedone(){
        console.log("This is actually done now");
    }
    console.log('do something');
    my_callback();
    donedone();
}

doSomething(another);
*/





/*
const crescent = (a, b) => {
    return a - b;
}
const decrescent = (a, b) => {
    return b - a;
}
function getPeople(sort_callback) {
    const people = [100, 20, 40];
    people.sort(sort_callback);
    console.log(people);
}

getPeople(crescent);
getPeople(decrescent);
*/

/*
let number = 0;

function add(n, callback) {
  n++;
  callback(n);
}

function callback_after_add(result){
    console.log("Order 1.", result); //1
}

add(number, callback_after_add)

console.log("Order 2.", number); // 0

*/








let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Callback
numbers.forEach(function (number) {
    console.log(number);
})

// Callback
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
});

// Callback
let oddNumbers = numbers.filter(function (number) {
    return number % 2 > 0;
});

// Callback
let reducedNumbers = numbers.reduce(function (result, number) {
    return result + number;
});

// Callback
let mappedNumbers = numbers.map(function (number) {
    return number + 10;
});

console.log("evenNumbers", evenNumbers);
console.log("oddNumbers", oddNumbers);
console.log("reducedNumbers", reducedNumbers);
console.log("mappedNumbers", mappedNumbers);