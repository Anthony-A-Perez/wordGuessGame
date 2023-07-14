const inputContainer = document.querySelector(".input-container");
const userInput = document.querySelector(".user-input");
const submitButton = document.querySelector(".submit");
inputContainer.style.display = "none";
// statements to be evaluated, T or F

const questions = [
  {
    questionText:
      "You can use a text string as a literal value or assign it to a variable.",
    value: 1,
  },

  {
    questionText:
      "Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.",
    value: 2,
  },
  {
    questionText:
      "The statements inside an 'if' statement are contained by the same curly braces used to contain the statements in a function.",
    value: 1,
  },
  {
    questionText:
      "JavaScript arrays are zero-indexed. The first element of an array is indexed at 0, and the last element is at the index value equal to the value of the array's length property.",
    value: 1,
  },
  {
    questionText: "Learning JavaScript is fun?",
    value: 1,
  },
  {
    questionText:
      "String values must be enclosed within parenthesis when being assigned to variables.",
    value: 1,
  },
  {
    questionText:
      "The JavaScript programming language was first created by Brendan Eich.",
    value: 1,
  },
  {
    questionText: "Methods are a commonly used data type.",
    value: 2,
  },
  {
    questionText: "JavaScript is the same as Java.",
    value: 2,
  },
  {
    questionText: "We put JavaScript inside the <js> HTML element.",
    value: 2,
  },
];

// get referenced elements

let trueButton = document.getElementById("true-button");
let falseButton = document.getElementById("false-button");
let answerButton = document.querySelector(".answer-button");
let statement = document.querySelector(".statement");
let result = document.querySelector(".result");
let startButton = document.querySelector(".start-button");
let statementVal = document.getElementById("1");
let stateValId = statementVal.id;
// +Functions

// create function to get next statement
function getStatement() {
  let theStatement = questions.pop();
  statement.innerText = theStatement.questionText;
  stateValId = theStatement.value;
  result.innerHTML = " ";

  console.log(stateValId);
}
const winText = "Correct, be wary of success.";
const loseText = "Incorrect, you're perfectly flawed.";

// compares value of statement with vale of click event

answerButton.addEventListener("click", (event) => {
  event.preventDefault();
  let scoreBoard = document.getElementById("score");

  if (parseInt(event.target.value) == stateValId) {
    result.innerHTML = winText;
    result.style.color = "#00FF00";
    scoreBoard.value++;
  } else {
    result.innerHTML = loseText;
    result.style.color = "#FF0000";
    scoreBoard.value--;
    seconds -= 15000;
  }
});

//event listener calls the getStatement function, randomly populating the 'statement' <div>

let seconds = 1000 * 60; //1000 = 1 second in JS
let time;
startButton.addEventListener("click", timer);

function timer() {
  startButton.style.display = "none";
  if (seconds >= 60000) time = setInterval(timer, 1000);
  seconds -= 1000;
  document.getElementById("time").innerHTML = "00:" + seconds / 1000;
  if (seconds < -1 || questions.length === 0) {
    clearInterval(time);
    alert("GAMEOVER");
    document.getElementById("time").innerHTML = "";

    renderScores();
    // location.reload();
  }
}

document.getElementById("time").innerHTML = "00:" + seconds / 1000;

startButton.addEventListener("click", getStatement);

trueButton.addEventListener("click", getStatement);
falseButton.addEventListener("click", getStatement);

// Retrieve scores from localStorage if available
let newScores = [];

 const scoreList = document.getElementById("ss-list");
function renderScores() {
  inputContainer.style.display = "block";

 
  scoreList.innerHTML = "";

  newScores.forEach((score, index) => {
    const li = document.createElement("li");

    const scoreText = document.createElement("span");
    scoreText.textContent = `Score ${index + 1}: ${score.score}`;
    li.appendChild(scoreText);

    scoreList.appendChild(li);
  });
}
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  let scoreInput = document.getElementById("score");
  let scoreValue = scoreInput.value;
  let userInputValue = userInput.value;
  let newScore = { score: scoreValue, initial: userInputValue };
  const li = document.createElement("li");
  const scoreText = document.createElement("span");
  scoreText.textContent = `${userInputValue}'s score ${newScores.length + 1}: ${scoreValue}`;
  li.appendChild(scoreText);
  scoreList.appendChild(li);
  newScores.push(newScore);
  localStorage.setItem("scores", JSON.stringify(newScores));
  setTimeout(function() {
location.reload()
}, 3000)
});

function getLocalStorage() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  if (scores !== null) {
    newScores = scores;
  }
}


getLocalStorage();
