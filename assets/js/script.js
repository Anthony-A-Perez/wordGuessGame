




// statements to be evaluated, T or F

const questions = [
  
    "You can use a text string as a literal value or assign it to a variable.",
  
    "Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.",

    "The statements inside an 'if' statement are contained by the same curly braces used to contain the statements in a function.",

    "JavaScript arrays are zero-indexed. The first element of an array is indexed at 0, and the last element is at the index value equal to the value of the array's length property.",

    "Learning JavaScript is fun?",

    "String values must be enclosed within parenthesis when being assigned to variables.",

    "The JavaScript programming language was first created by Brendan Eich.",
  
    "Methods are a commonly used data type.",
  
    "JavaScript is the same as Java.",
  
    "We put JavaScript inside the <js> HTML element.",

];

let trueStatements = [questions[0],questions[2],questions[3],questions[4],questions[6]];

//const trueStatements = (questions[0][2][3][4][6]);
const winText = "Correct, be wary of success.";
const loseText = "Incorrect, you're perfectly flawed.";

// get referenced elements

var trueButton = document.getElementById("true-button");
var falseButton = document.getElementById("false-button");
var answerButton = document.querySelector(".answer-button");
var statement = document.querySelector(".statement");
var result = document.querySelector(".result");
var startButton = document.querySelector(".start-button");


// +Functions

// create function to get next statement

function getStatement() {
let rand = Math.random(); 
let totalQuestions = questions.length;
let randIndex = Math.floor(rand * totalQuestions);
let randomQuestion = questions[randIndex]
statement.innerText = randomQuestion;

};

const trueClick = document.getElementById("true-button");

function compareTrue() {
  if (questions[0] == trueClick) {
    result.innerText = winText
  
  }

};


startButton.addEventListener("click", getStatement, compareTrue);


trueButton.addEventListener("click", compareTrue)
  
