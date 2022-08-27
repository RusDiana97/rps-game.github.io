const body = document.querySelector("body");
const input = document.getElementById("dark-mode");

const rockBtn = document.querySelector(".btn-rock");
const paperBtn = document.querySelector(".btn-paper");
const scissorsBtn = document.querySelector(".btn-scissors");

const computerChoiceDisplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const result = document.getElementById("result");

const buttonChoices = document.querySelectorAll("button");

let playerChoice;

// player choice
buttonChoices.forEach(possibleChoice => possibleChoice.addEventListener("click", (event) => {
    playerChoice = event.target.id; // to get the id of the button that pressed
    playerChoiceDisplay.innerHTML = playerChoice;

    computer();
    getResult();
}));

// computer choice
function computer() {
    const randomNumb = Math.floor(Math.random() * 3) + 1; // to get the numbers from 1 to 3

    /*
    1 => rock button
    2 => paper button
    3 => scissors button
    */

    if (randomNumb === 1) {
        computerChoiceDisplay.innerHTML = "rock";
    } else if (randomNumb === 2) {
        computerChoiceDisplay.innerHTML = "paper";
    } else {
        computerChoiceDisplay.innerHTML = "scissors";
    }
};

// result
function getResult() {
    if (computerChoiceDisplay.innerHTML === playerChoiceDisplay.innerHTML) {
        result.innerHTML = "draw";
    }
    if (computerChoiceDisplay.innerHTML === "rock" && playerChoiceDisplay.innerHTML === "paper") {
        result.innerHTML = "you won";
    }
    if (computerChoiceDisplay.innerHTMLr === "rock" && playerChoiceDisplay.innerHTML === "scissors") {
        result.innerHTML = "you lose";
    }
    if (computerChoiceDisplay.innerHTML === "paper" && playerChoiceDisplay.innerHTML === "rock") {
        result.innerHTML = "you lose";
    }
    if (computerChoiceDisplay.innerHTML === "paper" && playerChoiceDisplay.innerHTML === "scissors") {
        result.innerHTML = "you won";
    }
    if (computerChoiceDisplay.innerHTML === "scissors" && playerChoiceDisplay.innerHTML === "rock") {
        result.innerHTML = "you won";
    }
    if (computerChoiceDisplay.innerHTML === "scissors" && playerChoiceDisplay.innerHTML === "paper") {
        result.innerHTML = "you lose";
    }
};

// dark mode
input.addEventListener("input", () => {
    darkMode();
});

function darkMode() {
    if (input.checked) {
        body.style.background = "black";
        body.style.color = "white";
        rockBtn.style.background = "white";
        rockBtn.style.color = "black";
        paperBtn.style.background = "white";
        paperBtn.style.color = "black";
        scissorsBtn.style.background = "white";
        scissorsBtn.style.color = "black";
    } else {
        body.style.background = "white";
        body.style.color = "black";
        rockBtn.style.background = "lightgray";
        rockBtn.style.color = "white";
        paperBtn.style.background = "lightgray";
        paperBtn.style.color = "white";
        scissorsBtn.style.background = "lightgray";
        scissorsBtn.style.color = "white";
    }
}