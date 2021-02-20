/*
function showNumber(number) {
    if (number <= 10) { //Stopping condition
        console.log(number)
        number++;
        showNumber(number);
    }
}

showNumber(0);
*/

// function fibonacci(num) {
//     var a = 1, b = 0, temp;

//     while (num >= 0) {
//         temp = a;
//         a = a + b;
//         b = temp;
//         num--;
//     }

//     return b;
// }

function fibonacci(num) {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(fibonacci(10));