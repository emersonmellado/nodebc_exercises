/*
//First example of arrays
const students = [
    "Paul", 
    "Ringo", 
    "George",
    "Bruce",
    "John"
];

for (let i=0; i<students.length; i++){
    console.log(`Student ${i} is called`, students[i]);
}
*/

/*
//More complex example
const data = [
    'hello', 
    42, 
    function (name) { console.log('Hello', name) }, 
    null, 
    function (name) { console.log('hi', name) }
  ];

for (let i=0; i < data.length; i++){
    const dataEntry = data[i];
    console.log("My data is",dataEntry, "its type is", typeof dataEntry);
    if (typeof dataEntry === "function"){
        dataEntry("John Rambo");
    }
}
*/

/*
const people = ['John', 'Peter', 'juan', 'Mary', 'Betty', 'Emily', 'xime'];

//people[0]; // this will return the value 'John'

console.log(people[4]); // This will output John that's the value we get from the array

const name = people[2];

console.log(name);

*/







const data = [
    'Hello or whatever',              //0
    42,                               //1   
    false,                            //2
    null,                            //3
    function() { console.log('hi') } //4
  ];
  
  const message     = data[0];
  const lifeMeaning = data[1];
  const single      = data[2];
  const nullValue   = data[3];
  const greeting    = data[4];
  
  console.log(message);
  console.log(lifeMeaning);
  console.log('single?:', single);
  console.log(greeting);
  
  // Ready to have your mind blown?
  greeting(); // This will show hi on the console