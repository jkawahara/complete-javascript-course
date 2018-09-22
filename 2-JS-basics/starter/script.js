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
