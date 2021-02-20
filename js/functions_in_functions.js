/*
function welcome() {

    function greeting() {
        console.log('Hi Coco!!!');
    }

    greeting();
}

welcome(); // Hi Coco!!!
console.log("This is still goind to be logged");
greeting(); // greeting is not defined
console.log("This is NOT goind to be logged");
*/
/*
let name = 'Coco';

function welcome() {
    let message = "Hi";
    console.log("1.", message, name);

    function greet() {
        console.log("2.", message, name);
    }

    greet();
}

welcome(); // Shows Coco twice

console.log("3.", message, name) // Coco
*/

/*
function welcome(name) {
    let message = 'welcome ';
    
    function greet(value) {
      return message + ' ' + value;
    }
  
    return greet(name);
  }
  const greeting = welcome('Coco');
  console.log(greeting); // welcome Coco
  */
/*
//Factory pattern
function welcome() {
    let message = 'welcome ';

    function greet(whatever, testing, chill) {
        console.log("Arguments", testing, chill);
        return message + ' ' + whatever;//arguments[0];
    }
    //return greet(name);
    return greet;
}
const greeting = welcome();
const people = ['John'];
people.forEach((people) => {
    console.log(greeting(people, 1234, "Another argument"));
})
*/

/*
// Object destructuring (Arrays)
function welcome() {
    console.log("welcome:Arguments", ...arguments);
    
    const [keyZero, keyOne] = arguments; //Object destructuring
    //     0        1 
    //const keyZero = arguments[0];
    // const keyOne = arguments[1];    
    
    console.log("KeyZero", keyZero);
    console.log("keyOne", keyOne);
}

welcome('Arg1', 'Testing');
*/

/*
// Object destructuring (Objects)
function welcome() {
    console.log("welcome:Arguments", ...arguments);
    const obj = {
        first: arguments[0],
        second: arguments[1]
    };

    const { first: keyZero, second: keyOne } = obj;  //Object destructuring

    console.log("KeyZero", keyZero);
    console.log("keyOne", keyOne);
}

welcome('Arg1', 'Testing');
*/