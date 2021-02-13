/* SYNTAX:
function FUNCTION_NAME(){
}
*/
/*
function greeting() { //declaration
    console.log("Hello everyone :)")
}

greeting(); //invoke or call

const fun_var = greeting; //

console.log("My greeting: ", typeof greeting);
console.log("My fun_var: ", typeof fun_var);

greeting(); //invoke or call
fun_var(); //invoke or call
*/

/*
//Declare a variable and assign an anonymous function
const greeting = () => {
    console.log("Hello again");
}

greeting();
*/

/*
const x = 0;
const y = 1;
const z = (y * 2);

(() => {
    console.log("Hello again");
})(); //IIFE
*/

/*
function greeting() { //imperative function
    console.log("Hello everyone :)")
}

greeting(); //invoke or call
*/
/*
function greeting() { //passive function
    return "Hello everyone :)";
}

const pumpkin = greeting;

console.log(pumpkin); //Displaying the function declaration
console.log(pumpkin()); //call
*/
/*

function get_age(){
    return 30;
}

function isUserLoggedIn(){
    return true;
}

const age = get_age();
const isLoggedIn = isUserLoggedIn();

console.log(get_age, typeof get_age);
console.log("Is user logged in", isLoggedIn, typeof isLoggedIn);

if (get_age() >= 18){
    console.log("The user is older than 18 it is", age, "years old");
}

*/
/* one parameter function
function greeting(name) {
    console.log("Hello", name);
}
greeting("Neda");
greeting("Hamid");
greeting("Jerez");
*/




/*
//Multiple parameters in a function
function greeting(name, exercise) {
    console.log("Hello", name, " You are doing exericse", exercise);
}
greeting("Neda", 10);
greeting("Hamid", 12);
greeting("Jerez", 13);

*/

/*
//More complex and meaningless function
function greeting(name, exercise) {
    if (exercise < 100) {
        console.log("Hello", name, " You are doing exericse", exercise);
        return false;
    }    
    if (exercise > 100){
        console.log("Hey", name, "keep going! It will finish soon");
        return true
    }
}

const exercise_number = 10;
console.log("Did student one finished all exercises?", greeting("Neda", exercise_number));
console.log("Did student two finished all exercises?", greeting("Hamid", exercise_number + 2));
console.log("Did student three finished all exercises?", greeting("Jerez", exercise_number + 5));
console.log("Did student four finished all exercises?", greeting("John Rambo", exercise_number * 50));
*/




/*
function sayHello(name, age) {
    console.log("BEFORE: Age type", typeof age," its value is:", age);
    age = Number(age); //Casting age to be a number.
    console.log("AFTER: Age type", typeof age," its value is:", age);
    if (age === 18){
        console.log("Hellooo", name, "you are", age, "years old");
    }
}

sayHello("John Rambo", "10");
*/