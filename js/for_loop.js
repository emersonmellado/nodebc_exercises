/* Syntax
for (initialization; condition; finalExpression) {
    // statement
}
*/
/*
console.log("Number is", 0);
console.log("Number is", 1);
console.log("Number is", 2);
console.log("Number is", 3);
*/

//Increment
let odds = 0;
for (let number=0; number <= 100; number++) { //0 - number=0; //1 - number=1 //2 - number=2 //3 - number=3
    if (number > 90){
        break;
    }
    if (number % 2 !== 0){
        odds = number * 2;
        continue;
    }
    console.log("F: Number is", number, " odds are ", odds);   
}
/*
//Decrement
for (let number=10; number >= 0; number--) {
    console.log("F: Number is", number);   
}
*/
/*
//An example with two variable
for (let i=10, j=0; i >= 0; i--, j=j+10) {
    console.log("F: Number is", i, " and the other is", j);   
}
*/