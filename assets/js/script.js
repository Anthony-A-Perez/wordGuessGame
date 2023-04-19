

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

let trueButton = document.getElementById("true-button");
let falseButton = document.getElementById("false-button");
let answerButton = document.querySelector(".answer-button");
let statement = document.querySelector(".statement");
let result = document.querySelector(".result");
let startButton = document.querySelector(".start-button");
let statementVal = document.getElementById("1");
let stateValId = statementVal.id
// +Functions

// create function to get next statement
function getStatement() {
 
    let theStatement = questions.pop()
    statement.innerText = theStatement.questionText;
    stateValId = theStatement.value;
    result.innerHTML = " "
    if (questions.length === 0) {
    setTimeout(() => {
        alert("GAMEOVER")}, '5000');

    };
    //console.log(questions.pop());
    console.log(questions);
    // console.log(randomValue);
    // console.log(randomQuestion);
    // console.log(randomValue);
    console.log(stateValId);

}
const winText = "Correct, be wary of success.";
const loseText = "Incorrect, you're perfectly flawed.";

// compares value of statement with vale of click event

answerButton.addEventListener("click", event => {
    event.preventDefault()
    let scoreBoard = document.getElementById('score')

    if (event.target.value == stateValId) {

        result.innerHTML = winText;
        result.style.color = "#00FF00";
        scoreBoard.value++

    } else {

        result.innerHTML = loseText;
        result.style.color = "#FF0000";
        scoreBoard.value--
        seconds -= 5000
    }

}

);

//event listener calls the getStatement function, randomly populating the 'statement' <div>

let seconds = 1000 * 60; //1000 = 1 second in JS
let time;
startButton.addEventListener('click', timer)

function timer() {
    startButton.style.display = 'none';
    if (seconds == 60000)
        time = setInterval(timer, 1000)
    seconds -= 1000;
    document.getElementById("time").innerHTML = '00:' + seconds / 1000;
    if (seconds < -1) {
        clearInterval(time);
        alert("GAMEOVER");
        document.getElementById("time").innerHTML = " ";
        location.reload()
    }

}
document.getElementById("time").innerHTML = "00:" + seconds / 1000;

startButton.addEventListener("click", getStatement);

trueButton.addEventListener('click', getStatement);
falseButton.addEventListener('click', getStatement);

