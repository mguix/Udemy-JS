// CODING CHALLENGE 5

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!
This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.
Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).
5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
GOOD LUCK 😀
*/

let tipsJohn = {
  name: "John Smith",
  bills: [77, 375, 110, 45],

  tipCalculator: function() {
    this.tips = [];
    this.totalBill = [];

    for (var i = 0; i < this.bills.length; i++) {
      let bill = this.bills[i];
      let percentage;

      if (bill < 50) {
        percentage = 0.2;
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
      } else {
        percentage = 0.1;
      }
      this.tips[i] = bill * percentage;
      this.totalBill[i] = bill + bill * percentage;
    }
  }
};

// We are not passing bills as argument this time since the bills are in an array inside the object. We have to get the number from this.bills[i]!!

tipsJohn.tipCalculator();
console.log(tipsJohn.tips);
console.log(tipsJohn.totalBill);

let tipsMark = {
  name: "Mark Miller",
  bills: [77, 375, 110, 45],

  tipCalculator: function() {
    this.tips = [];
    this.totalBill = [];

    for (var i = 0; i < this.bills.length; i++) {
      let bill = this.bills[i];
      let percentage;

      if (bill < 100) {
        percentage = 0.2;
      } else if (bill >= 100 && bill < 300) {
        percentage = 0.1;
      } else {
        percentage = 0.25;
      }
      this.tips[i] = bill * percentage;
      this.totalBill[i] = bill + bill * percentage;
    }
  }
};

// We are not passing bills as argument this time since the bills are in an array inside the object. We have to get the number from this.bills[i]!!

tipsMark.tipCalculator();
console.log(tipsMark.tips);
console.log(tipsMark.totalBill);

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}
tipsJohn.average = calcAverage(tipsJohn.tips);
tipsMark.average = calcAverage(tipsMark.tips);

console.log(tipsJohn.average);
console.log(tipsMark.average);

if (tipsJohn.average > tipsMark.average) {
  console.log(
    tipsJohn.name +
      "'s family pays higher tips, with an average of $" +
      tipsJohn.average
  );
} else if (tipsMark.average > tipsJohn.average) {
  console.log(
    tipsMark.name +
      "'s family pays higher tips, with an average of $" +
      tipsMark.average
  );
}
