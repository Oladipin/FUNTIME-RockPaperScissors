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
            runGame();

        });
    };

});
function runGame() {
    
}

function checkWinner() {

}

function increamentPlayerScore() {

}

function increamentComputerScore() {

}