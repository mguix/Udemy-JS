// Udemy JS course

// Challange 3
/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.
To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).
(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)
GOOD LUCK 😀
*/

var tips = [];
var totalBill = [];

function calculateTip(bill) {
  var tip = 0;
  if (bill < 50) {
    tip = bill * 0.2;
    tips.push(tip);
    totalBill.push(bill + tip);
  } else if (bill >= 50 && bill < 200) {
    tip = bill * 0.15;
    tips.push(tip);
    totalBill.push(bill + tip);
  } else {
    tip = bill * 0.1;
    tips.push(tip);
    totalBill.push(bill + tip);
  }
}

calculateTip(124);
calculateTip(48);
calculateTip(268);

console.log(tips);
console.log(totalBill);
