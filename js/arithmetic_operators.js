// + - / *
let x = 10;
let y = 2;

// console.log("Sum", x + y); //12
// console.log("Subtract", x - y); //8
// console.log("Divide", x / y); //5
// console.log("Multiply", x * y); //20

// console.log("Multiply and sum", x * y + x + y); //32
// console.log("Multiply but first sum", x * (y + x + y)); //140
const result1 = x - y;
const result2 =  y - x;
// console.log("1. Non-Negative values: ", result1, typeof result1);
// console.log("2. Negative values: ", result2, typeof result2);
// console.log("3. Negative values: ", Math.abs(result2), typeof result2);

const test = Number("10"); //Type casting
console.log("test is:", typeof test, test * 2);

const test2 = 123 + "";
console.log("test2 is:", typeof test2, test2 * 2);