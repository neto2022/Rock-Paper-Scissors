// A program thats get rock, paper or scissors from the user and 
// the computer returns randomically rock, paper or scissors
// and checks who won or ended up on a draw!

function getComputerChoice() {
    let computerTurn;
    while (1) {
        computerTurn = Math.random()*10;
        if (computerTurn >= 1 && computerTurn<=3) {
            computerTurn =  Math.round(computerTurn, 3);

            if (computerTurn == 1) {
                computerTurn = "Rock";
                break;
            } else if (computerTurn == 2) {
                computerTurn = "Paper";
                break;
            } else if (computerTurn == 3) {
                computerTurn = "Scissors";
                break;
            }
        }
    }
    return computerTurn;
}

function playRound(playerSelection, computerSelection) {
    
}