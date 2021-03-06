/*
const form = document.forms[0];
const formElements = form.elements;

console.log(formElements)

console.log("Action", form.action); // save_user.html
console.log("Encoding", form.encoding); // get
console.log("method", form.method); // application/x-www-form-urlencoded
console.log("name", form.name); // login
*/



function sayHi() {
    const select = document.querySelector('select');
    const index = select.selectedIndex;

    console.log("Selection index is:", index);  // returns the option index
    console.log("The user selected country:", select.options[index].value);
}
const form = document.forms[0];
form.onsubmit = function (event) {
    sayHi();
    event.preventDefault();
}
