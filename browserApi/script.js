/*
let name = "Bruce";
console.log(`Hello 1111111 => ${name}`);
*/

//window.alert("Hi, how are you?");
//alert("Hi, how are you again?");

/*
let name = window.prompt('Please input your name');
let superHero = prompt('Please input your favourite superheroe name');

console.log(`Hello ${name}`);
console.log(`Your favourite superhere is ${superHero}`);

*/
/*
const question = 'Are you older than 17 years?';

let isAdult = window.confirm(question);
//confirm(question);
console.log("Is the user an adult? ", isAdult);
*/

/*
/// Location
// const properties = Object.keys(location);
// console.log("Location: ", properties);
//https://github.com/emersonmellado/nodebcjan6/blob/master/browserapi.md
console.log("Location.href:", location.href); //https://github.com/emersonmellado/nodebcjan6/blob/master/browserapi.md
console.log("Location.protocol:", location.protocol); //https://
console.log("Location.host:", location.host); //github.com
console.log("Location.hostname:", location.hostname); 
console.log("Location.port:", location.port);
console.log("Location.pathname:", location.pathname);
console.log("Location.search:", location.search);
console.log("Location.hash:", location.hash);

*/

/*
//SetTimeout
const greet = function (name) {
    console.log('Hi!!', name);
}

const idTimeout = setTimeout(greet, 5000, 'John');
console.log("idTimeout", idTimeout);
// clearTimeout(idTimeout);
*/

/*
const greet = function (name) {
    console.log('Hi!!', name, new Date());
}

setInterval(greet, 4000, 'John');
*/
/*
// window.onload = () => {
    const header = document.getElementsByTagName('h1');
    console.log("header", header);
    for (let i = 0; i < 4; i++) {
        console.log(header[i].innerHTML);
    };
// }
*/

/*
console.log("Window", window);

console.log("Trying to close the window");
window.alert("This will close after you click OK");
window.close();
*/

/*
const pOne = document.getElementById('paragraph_one');
console.log("I'm outside the onload", document, pOne);
window.onload = function(){
    const pOne_1 = document.getElementById('paragraph_one');
    console.log("I'm INSIDE the onload", document, pOne_1);
}
*/
/*
window.onload = function () {
    const div = document.querySelectorAll('div');
    const span = document.querySelector('span');

    console.log(div); // <div class="red">Hi I'm div number 1</div>
    console.log(span); // <span class="red">Hi I'm span number 2</span>
}
*/

/*
window.onload = function () {
    var colorPreference = "red";
    const p = document.querySelector('p');
    console.log("P Element", p);
    console.log("P Element Attributes", p.attributes);
    console.log("P Element Attributes[0]", p.attributes[0]);
    console.log("P Element Attributes[0].name", p.attributes[0].name);
    console.log("P Element Attributes[0].value", p.attributes[0].value);

    console.log("P Element Attributes[1]", p.attributes[1]);
    console.log("P Element Attributes[1].name", p.attributes[1].name);
    console.log("P Element Attributes[1].value:BEFORE", p.attributes[1].value);

    function convertPToRed(){
        p.attributes[1].value = colorPreference;
        console.log("P Element Attributes[1].value:AFTER", p.attributes[1].value);
    }
    
    setTimeout(convertPToRed, 2000);
}

*/

function getColor() {
    const colors = ['red', 'green', 'blue'];
    var randomNumber = Math.floor(Math.random() * colors.length);
    return colors[randomNumber];
}

function getElement(selector) {
    return {
        element: document.querySelector(selector),
        color: getColor()
    }
}

window.onload = function () {
    function convertPToColorPreference() {
        const p = getElement('p');
        const classList = p.element.classList;
        p.element.classList.remove(classList.item(0));
        p.element.classList.add(p.color);
    }
    setInterval(convertPToColorPreference, 2000);
}