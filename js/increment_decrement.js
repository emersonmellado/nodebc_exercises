let number = 0;

number++;
number++;
number++;

console.log("1 -> ", number); // 3
++number;
console.log("2 -> ", number); // 4

number--;
console.log("3 -> ", number); // 3

--number;
console.log("4 -> ", number); // 2
console.log("5 -> ", --number); // 1 
number--; //0
console.log("6 -> ", number--); // 0
console.log("7 -> ", number); // -1

console.log("Another example below:");
let anothernumber = 10;
console.log("1. ", anothernumber); //10
console.log("2. ", anothernumber++); //10 (anothernumber will have value of 11)
console.log("3. ", anothernumber); //11
console.log("4. ", ++anothernumber); //12
console.log("5. ", anothernumber++); //12
console.log("6. ", anothernumber); //13
console.log(" Now we'll decrement ");
console.log("7. ", anothernumber--); //13
console.log("8. ", anothernumber); //12
console.log("9. ", --anothernumber); //11
