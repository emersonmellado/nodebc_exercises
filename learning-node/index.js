const getPrice = require('./math');

const final_price = getPrice.priceCalculation(120);
const final_price1 = getPrice.priceBlackFriday(120);

console.log("Final price", final_price);
console.log("BF: Final price", final_price1);