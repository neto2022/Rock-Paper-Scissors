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
                computerTurn = 1; //Rock
                break;
            } else if (computerTurn == 2) {
                computerTurn = 2; //Paper
                break;
            } else if (computerTurn == 3) {
                computerTurn = 3; //Scissors
                break;
            }
        }
    }
    return computerTurn;
}

let playerSelection = 1;

function playRound() {
    computerSeletion = getComputerChoice();
    console.log(computerSeletion);
    if (playerSelection == 1 && computerSeletion == 2 ) {
        console.log("test");
    }
}
playRound();