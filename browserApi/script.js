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
// window.onload = () => {
    const header = document.getElementsByTagName('h1');
    console.log("header", header);
    for (let i = 0; i < 4; i++) {
        console.log(header[i].innerHTML);
    };
// }