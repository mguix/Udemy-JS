//Udemy JS Course

// Challange 4

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
GOOD LUCK 😀
*/

let john = {
  name: "John Smith",
  mass: 93,
  height: 1.89,
  johnBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

let mark = {
  name: "Mark Miller",
  mass: 84,
  height: 1.71,
  markBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

console.log(john.johnBMI());
console.log(mark.markBMI());
console.log(john, mark);

if (john.bmi > mark.bmi) {
  console.log(
    john.name +
      " has a higher BMI than Mark, with a BMI of " +
      Math.round(john.bmi) +
      " a mass of " +
      john.mass +
      " and a height of " +
      john.height
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    mark.name +
      " has a higher BMI than John, with a BMI of " +
      mark.bmi +
      " a mass of " +
      mark.mass +
      " and a height of " +
      mark.height
  );
} else {
  console.log("John and Mark have the same BMI");
}
