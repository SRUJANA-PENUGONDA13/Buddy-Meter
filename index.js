
// Array of objects
var readlineSync = require('readline-sync');

var score = 0

var questions  = [{
  question: "Where do I live? ",
  answer: "Narasaraopet"
}, {
  question: "\nWhat is my passion? ",
  answer: "Coding"
},
{
  question: "\nWhere do I work? ",
  answer: "TCS"
},
{
  question: "\nWhat is my favourite food?? ",
  answer: "Biryani"
},
{
  question: "\nWhat is my age? ",
  answer: "23"
}];
function welcome()
{
  
  var userName = readlineSync.question('Your name please : ');

  console.log("\nHi "+userName+'\n'+"Welcome to BuddyMeter :) \n")

}

function game()
{
  for(var i = 0 ; i < questions.length; i++)
  {
    play(questions[i].question, questions[i].answer);
  }
  finalScore()
}

function play(question,answer)
{
  var userAnswer = readlineSync.question(question);

  if( userAnswer.toUpperCase() === answer.toUpperCase())
  {
    console.log("right!")
    score = score + 1;
  }
  else
  {
    console.log("wrong")
  }
}

function finalScore()
{
  console.log("\nYour final score: "+score+"\n");
  console.log("Thank you for your time")
}
welcome()
game()
play()

