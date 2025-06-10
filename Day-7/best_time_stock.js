/// Best Time to Buy and Sell Stock

var profit = function (price) {
  let min = price[0];
  let maxProfit = 0;

  for (let i = 1; i < price.length; i++) {
    if (price[i] - min > maxProfit) {
      maxProfit = price[i] - min;
    }
    if (price[i] < min) {
      min = price[i];
    }
  }
  console.log(`Min - ${min} and Max - ${maxProfit}`);

  return maxProfit;
};
var price = [1, 3, 5, 7, 2, 8, 10];
console.log(profit(price));
