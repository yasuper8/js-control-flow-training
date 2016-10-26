console.log("security_questions.js loaded");

var securityQuestions = [
  {
    questions: "Where is the capital city in Japan?",
    expectedAanswer: "Tokyo"
  },
  {
    questions: "How many presidents has the US had?",
    expectedAanswer: "43"
  },
  {
    questions: "How many states are in the US?",
    expectedAanswer: "50"
  }
]

var userAnswer;

for (var i = securityQuestions.length - 1; i >= 0; i--) {
  userAnswer = prompt(securityQuestions[i].questions);
  if(userAnswer !== securityQuestions[i].expectedAanswer) {
    alert("That's not a correct answer :( ");
    break;
  }
}
