var readlineSync = require("readline-sync");

var userName = readlineSync.question("What is your name? ");
var score=0
console.log("Welcome " + userName +"!!")
console.log("How well do you know Aafaque?")

function play(question,answer){
var userAnswer = readlineSync.question(question)

if (userAnswer.toLowerCase() == answer){
  console.log("You are right!")
  score=score+1}
else {console.log("Sorry, wrong answer!")  
}
console.log("your Score is: "+ score)
}

var question1 = {
  question: "Where do i live?",
  answer:"delhi"
}
var question2 = {
  question: "What is my last name?",
  answer:"rasheed"
}
var question3 = {
  question: "What is my favourite sport?",
  answer:"football"
}
var question4 = {
  question: "when is my birthday?",
  answer:"12 march"
}
var question5 = {
  question: "what is my favourite food?",
  answer:"pizza"
}
questionBank=[question1,question2,question3,question4,question5]
for (var i=0; i<5; i++){
play(questionBank[i].question,questionBank[i].answer)
}