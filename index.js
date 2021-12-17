var readlineSync = require("readline-sync");

function welcome() {
var userName = readlineSync.question("What is your name? ");

console.log("Welcome " + userName +"!!")
console.log("How well do you know Aafaque?")
}
var score=0
function play(question,answer){
var userAnswer = readlineSync.question(question)

if (userAnswer.toLowerCase() == answer){
  console.log("You are right!")
  score=score+1}
else {console.log("Sorry, wrong answer!")  
}
console.log("your current Score is: "+ score)
console.log("____________________")
}

function game(){for (var i=0; i<questionBank.length; i++){
play(questionBank[i].question,questionBank[i].answer)
}}

var highscore=[
  {
    name: "Aafaque", score:5
    
  },
  {
    name:"Aamir", score:4
  
  }
]
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


welcome()
game()

console.log("Congratulations!, you scored "+ score)

console.log("************************************************************")
console.log("HighScores")
for(i=0; i<highscore.length; i++){
console.log((i+1)+"."+ "Name: "+ highscore[i].name + "--> score: "+highscore[i].score)}