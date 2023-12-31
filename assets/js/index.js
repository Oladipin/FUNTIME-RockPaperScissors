//Declaring the global variables

let playerOutcome = document.getElementById("player-outcome");
let compOutcome = document.getElementById("comp-outcome");
let resultDisplay = document.getElementById("result-display");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");
let choices = ["rock0", "paper1", "scissors2"];

// Event listeners for DOM to finish loading and to get button element

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName("choice-btn");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);

        });
    };

});

// function to run game
function runGame(playerChoice) {
    playerOutcome.src = `assets/images/${choices[playerChoice]}.png`;
    playerOutcome.alt = choices[playerChoice];

    let compChoice = Math.floor(Math.random() * 3);
    compOutcome.src = `assets/images/${choices[compChoice]}.png`;
    compOutcome.alt = choices[compChoice];

    resultDisplay.innerHTML = checkWinner(playerChoice, compChoice);
    increamentPlayerScore();
    increamentComputerScore();
}
/** 
 * This function compares the player choice and the computer choice and draws a winner from it
 */
function checkWinner(playerChoice, compChoice) {
    if (playerChoice == compChoice) {
        return "Draw!";
    } else if (playerChoice == 0) {
        return (compChoice == 2) ? "You Win!" : "You Lose!";
    } else if (playerChoice == 1) {
        return (compChoice == 0) ? "You Win!" : "You Lose!";
    } else if (playerChoice == 2) {
        return (compChoice == 1) ? "You Win!" : "You Lose!";
    }
}

//  function to increament player score by 1
function increamentPlayerScore() {
    let count = parseInt(playerScore.innerText);
    if (resultDisplay.innerHTML == "You Win!") {
        playerScore.innerText = ++count;
    }
}

//  function to increament computer score by 1
function increamentComputerScore() {
    let count = parseInt(compScore.innerText);
    if (resultDisplay.innerHTML == "You Lose!") {
        compScore.innerText = ++count;
    }
}
