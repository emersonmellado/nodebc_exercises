/*
do {
  // This code will execute at least once
} while (condition)
*/

let number = 0;

while (number <= 0){
    console.log("While: number is", number++);
}
number = 0;
do {
  console.log('DO: number is ', number);
  number++;
} while (number <= 0);