// Mini code challenge to re-write using Closures
/*function interviewQuestion(job) {
  if (job === 'designer') {
      return function(name) {
          console.log(name + ', can you please explain what UX design is?');
      }
  } else if (job === 'teacher') {
      return function(name) {
          console.log('What subject do you teach, ' + name + '?');
      }
  } else {
      return function(name) {
          console.log('Hello ' + name + ', what do you do?');
      }
  }
}
*/
/*
function interviewQuestion(job) {
  return function(name) {
    if (job === 'designer') {
      console.log(name + ', can you please explain what UX design is?');
    } else if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}
interviewQuestion('designer')('Jamie');
interviewQuestion('teacher')('John');
interviewQuestion('other')('Sal');
*/

/////////////////////////////
// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
/*
// IIFE
(function () {
// Function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

// Display question in console
  Question.prototype.displayQuestion = function() { // 
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

// Check answer and display result in console
  Question.prototype.checkAnswer = function(answer) {
    if (answer === this.correct) {
      console.log('Your answer is correct!');
    } else {
      console.log('Your answer is incorrect.')
    }
  }

// Questions
  var quest1 = new Question('What is the name of our solar system?',
                        ['Milky Way', 'The Solar System', 'Hitchhiker\'s Way'],
                        1);

  var quest2 = new Question('What is the name of our planet?',
                        ['Earth', 'Mars', 'Jupiter'],
                        0);
  var quest3 = new Question('What is the name of our Moon?',
                        ['Europa', 'Oberon', 'Moon'],
                        2);

  var questions = [quest1, quest2, quest3]; // Store questions into array
  
  var num = Math.floor(Math.random() * questions.length); // Generate random number

  questions[num].displayQuestion(); // Call displayQuestion function by using random number as index

  var answer = parseInt(prompt('What is the answer to the question? Enter the number corresponding to the listed answers.')); // Prompt for answer to question

  questions[num].checkAnswer(answer); // Call checkAnswer function by using random number as index
})();
*/
/*
--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

// IIFE
(function () {
// Function constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

// Display question with answers in console
  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  }

// Check answer and display result in console
  Question.prototype.checkAnswer = function(answer, callback) {
    var localScore;

    if (answer === this.correct) {
      console.log('Your answer is correct!');
      localScore = callback(true);
    } else {
      console.log('Your answer is incorrect.');
      localScore = callback(false);
    }
    this.displayScore(localScore);
  }

// Display score in console
  Question.prototype.displayScore = function(score) {
    console.log('Your current score is: ' + score);
  }

// Declare variables for Questions, Answers and Correct Answer 
  var quest1 = new Question('What is the name of our solar system?',
                        ['Milky Way', 'The Solar System', 'Hitchhiker\'s Way'],
                        1);

  var quest2 = new Question('What is the name of our planet?',
                        ['Earth', 'Mars', 'Jupiter'],
                        0);
  var quest3 = new Question('What is the name of our Moon?',
                        ['Europa', 'Oberon', 'Moon'],
                        2);

  var questions = [quest1, quest2, quest3]; // Store questions into array
  
// Accumulate score for correct answers
  function score() {
    var localScore = 0;
    return function(correct) {
      if (correct) {
        localScore++;
      }
      return localScore;
    }
  }
    
  var keepScore = score(); // Store score

// Execute function calls based on user prompt
  function nextQuestion() {
    var num = Math.floor(Math.random() * questions.length); // Generate random number
    questions[num].displayQuestion(); // Call displayQuestion function by using random number as index

    var answer = prompt('What is the answer to the question? Enter the number corresponding to the listed answers.'); // Prompt for answer to question

    if (answer !== 'exit') { // Proceed if user doesn't prompt exit
      questions[num].checkAnswer(parseInt(answer), keepScore); // Call checkAnswer function by using random number as index

      nextQuestion(); // Call nextQuestion function
    }
  }

  nextQuestion(); // Call nextQuestion function

})();