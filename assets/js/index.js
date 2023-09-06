//Declaring the global variables

let playerOutcome = document.getElementById("player-outcome");
let compOutcome = document.getElementById("comp-outcome");
let resultDisplay = document.getElementById("result-display");
let playerScore = document.getElementById("player-score");
let compScore = document.getElementById("comp-score");
let choices = ["rock0", "paper1", "scissors2"];

// Event listeners for DOM to finish loading and to get button element

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            runGame(playerChoice);

        });
    };

});

function runGame(playerChoice) {
    playerOutcome.src = `assets/images/${choices[playerChoice]}.png`;
    playerOutcome.alt = choices[playerChoice];

    let compChoice = Math.floor(Math.random() * 3);

    compOutcome.src = `assets/images/${choices[compChoice]}.png`;
    compOutcome.alt = choices[compChoice];
}

function checkWinner() {

}

function increamentPlayerScore() {

}

function increamentComputerScore() {

}