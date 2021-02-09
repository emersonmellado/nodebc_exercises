/*
while (condition) {
  console.log('This code it\'s goin to be executed until the condition is false');
}
*/
/*
console.log("Number is", 0);
console.log("Number is", 1);
console.log("Number is", 2);
console.log("Number is", 2);
console.log("Number is", 4);
console.log("Number is", 5);
*/
/*
let number = 0;
while (number <= 9999999) {
    console.log("Number is", number);   //0 - number=0;       //1 - number = 1;     //2 - number = 2;     //3 - number = 3;     //4 - number = 4;
    number = number + 1;                //0 - number=0+1 = 1; //1 - number=1+1 = 2; //2 - number=2+1 = 3; //3 - number=3+1 = 4; //4 - number=4+1=5
}

//If you get to an infinite loop CTRL + C will stop the execution.
*/

//Alternative syntax ()
let number = 0;
while (number <= 5){ 
    console.log("Number is", number++);
}