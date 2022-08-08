// A program thats get rock, paper or scissors from the user and 
// the computer returns randomically rock, paper or scissors
// and checks who won or ended up on a draw!

let playerSelection;

function getComputerChoice() {
    let computerTurn;
    while (1) {
        computerTurn = Math.random()*10;
        if (computerTurn >= 1 && computerTurn<=3) {
            computerTurn =  Math.round(computerTurn, 3);
            break;
        }
    }
    return computerTurn;
}

function playRound() {
    computerSeletion = getComputerChoice();
    if (playerSelection == 1 && computerSeletion == 1 ) {
        console.log("Draw! Nobody Wins...");
    } else if (playerSelection == 1 && computerSeletion == 2) {
        console.log("Lose! Paper beats Rock");
    } else if (playerSelection == 1 && computerSeletion == 3) {
        console.log("Win! Rock beats Scissor");

    } else if (playerSelection == 2 && computerSeletion == 1 ) {
        console.log("Win! Papers beats Rock");
    } else if (playerSelection == 2 && computerSeletion == 2) {
        console.log("Draw! Nobody Wins...");
    } else if (playerSelection == 2 && computerSeletion == 3) {
        console.log("Lose! Papers beats rock");

    } else if (playerSelection == 3 && computerSeletion == 1 ) {
        console.log("Lose! Rock beats Scissor");
    } else if (playerSelection == 3 && computerSeletion == 2) {
        console.log("Win! Rock beats Paper");
    } else if (playerSelection == 3 && computerSeletion == 3) {
        console.log("Draw! Nobody Wins...");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Choose between Rock, Paper or Scissors");
    if (playerSelection >= -10000 && playerSelection <= 10000) {
        //checks if some number was typed
        alert("Only type Rock, Paper or Scissors!!!");
        break;
    } else if (playerSelection == "Rock" || playerSelection == "rock") {
        playerSelection = 1;
    } else if (playerSelection == "Paper" || playerSelection == "paper" ) {
        playerSelection = 2;
    } else if (playerSelection == "Scissors" || playerSelection == "scissors") {
        playerSelection = 3;
    } else {
        alert("Only type Rock, Paper or Scissors!!!");
    }
    getComputerChoice();
    playRound();
    }
}
game();