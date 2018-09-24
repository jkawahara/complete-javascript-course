/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 800 // kg
var heightMark = 1.8 // meters

var massJohn = 70 // kg
var heightJohn = 1.5 // meters

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherMarkBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + higherMarkBMI);
*/

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/
/*
var aveScoreJohn = (89 + 120 + 103) / 3;
var aveScoreMike = (116 + 94 + 123) / 3;
var aveScoreMary = (97 + 134 + 105) / 3;
console.log('John\'s average score: ' + aveScoreJohn + '; Mike\'s average score: ' + aveScoreMike + '; Mary\'s average score: ' +  aveScoreMary)

switch (true) {
  case aveScoreJohn > aveScoreMike && aveScoreJohn > aveScoreMary:
    console.log('John, with an average score of ' + aveScoreJohn + ', wins with the highest score!');
    break;
  case aveScoreMike > aveScoreJohn && aveScoreMike > aveScoreMary:
    console.log('Mike, with an average score of ' + aveScoreMike + ', wins with the highest score!');
    break;
  case aveScoreMary > aveScoreJohn && aveScoreMary > aveScoreMike:
    console.log('Mary, with an average score of ' + aveScoreMary + ', wins with the highest score!');
    break;
  case aveScoreJohn === aveScoreMike && aveScoreJohn !== aveScoreMary:
    console.log('John, with an average score of ' + aveScoreJohn + ', and Mike, with an average score of ' + aveScoreMike + ', both win with tied highest scores!');
    break;
  case aveScoreJohn === aveScoreMary && aveScoreJohn !== aveScoreMike:
    console.log('John, with an average score of ' + aveScoreJohn + ', and Mary, with an average score of ' + aveScoreMary + ', both win with tied highest scores!');
    break;
  case aveScoreMike === aveScoreMary && aveScoreMike !== aveScoreJohn:
    console.log('Mike, with an average score of ' + aveScoreMike + ', and Mary, with an average score of ' + aveScoreMary + ', both win with tied highest scores!');
    break;
  default:
    console.log('John, with an average score of ' + aveScoreJohn + ', Mike, with an average score of ' + aveScoreMike + ' and Mary, with an average score of ' + aveScoreMary + ', all win with tied highest scores!');
  }
*/

 /*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/
/*
function tipCalculator(bill) {
  if (bill < 50) {
    percentage = .20;
  } else if (bill >= 50 && bill <= 200) {
      percentage = .15;
  } else {
      percentage = .10;
  }
  return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];
var finalAmounts = [bills[0] + tips[0],
                    bills[1] + tips[1],
                    bills[2] + tips[2]];
console.log(tips, finalAmounts);
*/

/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/
/*var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);
console.log(bmiMark, bmiJohn);

var higherMarkBMI = bmiMark > bmiJohn;
console.log('Is Mark\'s BMI higher than John\'s? ' + higherMarkBMI);
*/
/*
var mark = {
  fullName: 'Mark Donahoe',
  mass: 170, // kg
  height: 1.5, // meters
  calcBMI: function() { // body mass index
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

var john = {
  fullName: 'John Shon',
  mass: 170, // kg
  height: 1.5, // meters
  calcBMI: function() { // body mass index
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
}

console.log(mark, john);
switch (true) {
  case mark.calcBMI() > john.calcBMI():
    console.log('Mark has the higher BMI, at ' + mark.bmi + '.');
    break;
  case john.bmi > mark.bmi:
    console.log('John has the higher BMI, at ' + john.bmi + '.');
    break;
  case mark.bmi == john.bmi:
    console.log('Mark and John have the same BMI, at ' + mark.bmi + '.');
}
*/

/*****************************
* CODING CHALLENGE 5
*/

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
/*
// Declare john object
var john = {
  fullName: 'John Smith',
  bills: [124, 48, 268, 180, 42],
  tips: [],
  finalAmounts: [],

  // Method for calculating tip and final amount
  calcTips: function() {
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      // Determine tip percentage
      if (this.bills[i] < 50) {
        percentage = .20;
      } else if (this.bills[i] >= 50 && this.bills[i] < 200) {
          percentage = .15;
      } else {
          percentage = .10;
      }

      this.tips[i] = this.bills[i] * percentage;
      this.finalAmounts[i] = this.bills[i] + this.bills[i] * percentage;
    } 
  }
}

// Declare mark object
var mark = {
  fullName: 'Mark Miller',
  bills: [77, 375, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalAmounts = [];

    // Method for calculating tip and final amount
    for (var i = 0; i < this.bills.length; i++) {
      var percentage;
      var bill = this.bills[i];

      // Determine tip percentage
      if (bill < 100) {
        percentage = .20;
      } else if (bill >= 100 && bill < 300) {
        percentage = .10;
      } else {
        percentage = .25;
      }

      this.tips[i] = bill * percentage;
      this.finalAmounts[i] = bill + bill * percentage;
    }
  }
}

// Calculate average tip
function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
  return sum / tips.length;
}

// Calculate tips and final amounts
john.calcTips();
mark.calcTips();
console.log(john, mark);

// Calculate average tips
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if (john.average > mark.average) {
  console.log(john.fullName + '\'s family tips higher, with an average tip of $' + john.average + '.');
} else if (mark.average > john.average) {
  console.log(mark.fullName + '\'s family tips higher, with an average tip of $' + mark.average + '.');
}
*/
