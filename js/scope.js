/*
//Global scoped name variable
var name = 'Peter'; //This is NOT enclosed
function showName() {
    console.log("From function", name);
}

showName(); // Peter
console.log("From console", name); // Peter
*/
/*
// Local scoped name variable
function showName() {
    var name = 'Peter'; //This is enclosed
    console.log("From function", name);
}

showName(); // Peter
console.log("From console", name); // Peter
*/

/*
var first_name = 'Peter'; //This is NOT enclosed = Global
function showName() {
    first_name = "Mary";
    console.log("From function", first_name);
}
console.log("From console 1: ", first_name); // Peter
showName(); // Mary
console.log("From console 2:", first_name); // Mary
*/

/*
// Enclosed scoped variable
let first_name = 'Peter'; //This is NOT enclosed = Global
function showName() {    
    let first_name = "Mary";  //This is enclosed
    console.log("From function", first_name);
}
console.log("From console 1: ", first_name); // Peter
showName(); // Mary
console.log("From console 2:", first_name); // Peter
*/


// Enclosed scoped variable
let first_name = 'Peter'; //This is NOT enclosed = Global
const showName = () => {    
    let first_name = "Mary";  //This is enclosed
    console.log("From function", first_name);
}
console.log("From console 1: ", first_name); // Peter
showName(); // Mary
console.log("From console 2:", first_name); // Peter