// Paper = 1, Scissor = 2, Rock = 3


function getComputerChoice() {
    let rand =  Math.floor(Math.random() * 10);
    if (rand >= 4) {
        if (rand >= 8) {
            return 1;
        }
        else {
            return 2;
        }
    }
    else {
        return  3;
    }
}

function playRound(playerSelection, computerSelection) {
    if (getComputerChoice() == 1) {
        if (playerSelection.toLowerCase() == "rock") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }
        else if (playerSelection.toLowerCase() == "paper") {
            console.log("Draw!");
            return 0;
        }
        else {
            console.log("You Win! Scissor beats Paper");
            return 1;
        }
    }
    if (getComputerChoice() == 2) {
        if (playerSelection.toLowerCase() == "rock") {
            console.log("You Win! Rock beats Scissor");
            return 1;
        }
        else if (playerSelection.toLowerCase() == "paper") {
            console.log("You Lose! Scissor beats Paper");
            return -1;
        }
        else {
            console.log("Draw!");
            return 0;
        }
    }
    else {
        if (playerSelection.toLowerCase() == "rock") {
            console.log("Draw!");
            return 0;
        }
        else if (playerSelection.toLowerCase() == "paper") {
            console.log("You Win! Paper beats Rock");
            return 1;
        }
        else {
            console.log("You Lose! Rock beats Scissor");
            return -1;
        }
    }
}

function game() {
    let cpuScore = 0, playerScore = 0;
    let t = 5;
    while (t--) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Enter your choise = ");
        result = playRound(playerSelection, computerSelection);
        if (result == 1) {
            playerScore++;
        }
        else if (result == -1) {
            cpuScore++;
        }
    }
    alert(`Your score = ${playerScore}\nCPU score = ${cpuScore}`)
}

game();