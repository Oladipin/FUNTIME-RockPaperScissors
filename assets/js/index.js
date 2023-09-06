// Event listeners for DOM to finish loading and to get button element

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            console.log("You clicked a game choice");;

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