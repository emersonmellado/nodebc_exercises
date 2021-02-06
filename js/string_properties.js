/*
const text = "Welcome to Javascript talk!";

console.log(text.length);

console.log('Welcome to JavaScript!!'.length);
*/

/*
const text = "Welcome to Javascript talk!";

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.link("http://test-example.com"));

*/
/*
const text = 'My mom name is '; // Note the trailing space!  It's a common mistake to forget whitespace when using concat
const name = 'Mary';

// We get one string back as result with both strings concatenated
const message = text.concat(name);

console.log(text + name);
console.log(message); // My mom name is Mary
console.log(text); // My mom name is
console.log(name); // Mary

*/
/*
let text = 'Java'; // Sometimes we don't want that trailing space ;)

console.log(text.concat('Script', ' is the best', ' Programming language!!'));
*/
/*
const testing = "This is a test";
const html = testing.toUpperCase().link("http://google.com");
console.log(html);
*/

/*
const originalText = 'JavaScript rock yeah!! right?';

const text = originalText.replace(originalText.charAt(originalText.length - 1), ".");

const text_lenght = text.length;
const charAt = text.charAt(text_lenght - 1); 

console.log(text, text_lenght);
console.log(charAt); // J
//console.log(text.charAt(0)); // J - Inline execution/call
*/
/*
const text = 'I do <p>Indeed JavaScript for a living!!</p>';

const tagToSearch = "<p>";

const openP = text.indexOf(tagToSearch) + tagToSearch.length;
const closeP = text.indexOf("</p>");
console.log("openP tag at char:", openP);
console.log("closeP tag at char:", closeP);

const paragraphContent = text.slice(openP, closeP);
console.log("The content of p is: ", paragraphContent);

*/
/*
const text = 'I do JavaScript and I also do python!!';
const textToSearch = "python";

const textToSearchPosition = text.indexOf(textToSearch);
const result = text.substr(textToSearchPosition, textToSearch.length);

console.log(textToSearchPosition, result); // JavaScript

*/

/*
let friends = 'Herve, Agnes, Jason, Ala, Arezoo';
let friendsArray = friends.split(',');

// friendsArray.forEach(function (friend) {
//     console.log("Hi", friend);
// });

console.log(friendsArray);
*/

