




// statements to be evaluated, T or F

const questions = [

    {
        questionText: "You can use a text string as a literal value or assign it to a variable.",
        value: 0
    },

    {
        questionText: "Assignment operators are used to perform mathematical calculations, such as addition, subtraction, multiplication, and division.",
        value: 1
    },
    {
        questionText: "The statements inside an 'if' statement are contained by the same curly braces used to contain the statements in a function.",
        value: 0
    },
    {
        questionText: "JavaScript arrays are zero-indexed. The first element of an array is indexed at 0, and the last element is at the index value equal to the value of the array's length property.",
        value: 0
    },
    {
        questionText: "Learning JavaScript is fun?",
        value: 0
    },
    {
        questionText: "String values must be enclosed within parenthesis when being assigned to variables.",
        value: 0
    },
    {
        questionText: "The JavaScript programming language was first created by Brendan Eich.",
        value: 0
    },
    {
        questionText: "Methods are a commonly used data type.",
        value: 1
    },
    {
        questionText: "JavaScript is the same as Java.",
        value: 1
    },
    {
        questionText: "We put JavaScript inside the <js> HTML element.",
        value: 1
    }
];



// get referenced elements

var trueButton = document.getElementById("true-button");
var falseButton = document.getElementById("false-button");
var answerButton = document.querySelector(".answer-button");
var statement = document.querySelector(".statement");
var result = document.querySelector(".result");
var startButton = document.querySelector(".start-button");
var statementVal = document.getElementById("1");
var stateValId = statementVal.id
// +Functions

// create function to get next statement
function getStatement() {
    var rand = Math.random();
    var totalQuestions = questions.length;
    randomIndex = Math.floor(rand * totalQuestions);
    var randomQuestion = questions[randomIndex].questionText;
    var randomValue = questions[randomIndex].value;
    statement.innerText = randomQuestion;
    stateValId = randomValue
      result.innerHTML = " "
    // console.log();
    // console.log(randomValue);
   console.log(stateValId);
 };
// function getValue() {
//     var rand = Math.random();
//     var totalQuestions = questions.length;
//     randomIndex = Math.floor(rand * totalQuestions);
//     var randomValue = questions[randomIndex].value;
//     // statement.innerText = randomValue;
//     console.log(randomValue);
   
// };



const winText = "Correct, be wary of success.";
const loseText = "Incorrect, you're perfectly flawed.";







// compares value of statement with vale of click event

answerButton.addEventListener("click", event => {
    event.preventDefault();
    
    if (event.target.value == stateValId) {
       
        result.innerHTML = winText;
        result.style.color = "#00FF00";
    
    } else {
       
        result.innerHTML = loseText; 
        result.style.color = "#FF0000";

        
    }
  
//     console.log(event.target.value);
//   console.log(randomQuestion);
}

);





//event listener calls the getStatement function, randomly populating the 'statement' <div>



startButton.addEventListener("click", getStatement);

// getValue()






