const revenew = 50;

const priceCalculation = function (price) {
    return price + revenew;
}

const priceBlackFriday = function (price) {
    return price * 0.7;
}

module.exports = {
    priceCalculation,
    priceBlackFriday
}